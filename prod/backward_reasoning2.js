//requires: term_set.js, forward_reasoning.js, tree_search.js
/***********************************************************************
後向き推論エンジン:

backwardReasoning(goal, ruleBase)
        後向き推論の木を深さ優先探索する(バックトラックあり)．できる限り
        ルールを逆向きに適用し，ルールが適用できなくなったときの WM の各
        要素を，ユーザが受け入れる(初期状態とする)かどうかを(ユーザに)問
        い合わせる．
        goal: 根節点 (= 目標状態の WM)
        ruleBase: ルールベース

getReverseRuleSet(unsolved)
        配列 unsolved に含まれる項のいずれかを action 部分に含むルール 
        (逆方向に適用することによってその項を消去できるルール; 順方向の
        適用でその項を生成するルール) の集合を ruleBase から選び出す．

revertRule(rule, wm)
        ルール rule を WM に逆向きに適用し，結果となる子節点を返す．すな
        わち，ルールの action 部に含まれる項を取り除いて condition 部に
        含まれる項を追加する．節点のプロパティ backtrace のリスト(配列)に
        は，適用したルール(の名前)を(左に)追加する

makeResult(wm)
        成功時の結果を表示する文字列を返す．forward_reasoning.js で定義
        した関数 forwardChain(…) も使用する．
***********************************************************************/

var RuleBase,   // ルールベース
    Rules,      // 適用可能なルール
    Yes, No,    // ユーザが肯定した項，否定した項のリスト
    Unsolved;   // 未解決の項のリスト

// 後向き推論の木を深さ優先探索する (バックトラックあり)
//   節点:   ワーキングメモリのプロパティ backtrace に適用ルール(の名前)のリスト(配列)を与えたもの
//   根節点: 目標状態に，プロパティ backtrace として [] を与えたもの
//   子節点: 親節点のワーキングメモリにルールを逆向きに適用したもの
//           プロパティ backtrace のルール(の名前)のリスト(配列)には，
//           使用されたルールが(前から)追加される
function backwardReasoning(goal, ruleBase) {
  RuleBase = ruleBase;
  Yes = []; No = [];
  goal.backtrace = [];
  treeDFSearch(goal);
}

function processNode(wm) {
  // WM中で未解決の項(肯定されない項)をルールベースと照合
  Unsolved = diffSet(wm, Yes);
  RuleSet  = getReverseRuleSet(Unsolved);
  // 逆方向に適用可能なルールがある時，探索を続行
  if (RuleSet.length==0) {  // 逆方向に適用可能なルールがない時
      if (Unsolved.every(function (tm) {
                           if (isIn(tm, No)) return false;
                           var yn = confirm(tm+" ?");
                           if (yn) Yes.push(tm); else No.push(tm);
                           return yn;
                         })             // Unsolved のすべての項が解決して
          && confirm(makeResult(wm)))   // 結果が受け入れられたら
        return true;                    // 成功終了
      // 否定された項があるか，結果がキャンセルされれば探索続行
  }
}

function next(wm) {
  return RuleSet.map(function (rule) { return revertRule(rule, wm); });
}

// ルールベースとの照合(後向き)
//   WM に(逆方向に)適用可能なルールのリストを得る
//   ルールの動作部分にWM中の未解決の項を含み，
//   逆向きに適用することによってその項を消去できるものを選び出す
function getReverseRuleSet(unsolved) {
  var rs = [];
  for (var r in RuleBase) {
    with (RuleBase[r]) {
      if (intersect(diffSet(action, condition), unsolved).length>0) rs.push(r);
    }
  }
  return rs;
}

// ルールの適用(動作)
//   ルールを逆向きに適用し，結果となる子節点を返す．すなわち，
//   ルールの動作部に含まれる項を取り除いて条件部に含まれる項を追加する．
//   節点のプロパティ backtrace のリスト(配列)には，適用したルールの名前を(左に)追加する
function revertRule(rule, wm) {
  with (RuleBase[rule]) {
    var wm2 = union(condition, diffSet(wm, action));
  }
  wm2.backtrace = [rule].concat(wm.backtrace);
  return wm2;
}

// 成功時の結果
//   成功時に結果として得られた初期状態に，同じく結果として得られた
//   ルール列を，再度前向きに順に適用して得られる状態をの表示文字列を返す
function makeResult(wm) {
  var msg = "Result: " + forwardChain(wm, wm.backtrace, RuleBase).toSource();
  msg += "\nBecause: " + wm.backtrace.toSource();
  msg += "\nFrom: " + wm.toSource();
  return msg;
}
