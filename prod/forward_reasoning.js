//requires: term_set.js
/***********************************************************************
前向き推論エンジン:

forwardReasoning(init, goal, ruleBase)
        初期状態 init から，目標状態 goal に至る前向き推論を行なう

getRuleSet(wm, ruleBase)
        WM とルールベース(ruleBase)を照合し，
        適用可能なルール(の名前)の集合を返す

choiceRule(ruleSet, ruleBase, wm, goal)
        ルールの集合(ruleSet)から適用するルールを選択し，
        そのルール(の名前)を返す．

applyRule(rule, wm, ruleBase)
        WM にルール(rule)を適用した結果の WM の内容を返す．

forwardChain(wm, rules, ruleBase)
        WM に rules (= ルール(の名前)のリスト)内のルールを順に適用し，
        結果の WM を返す．(後向き推論で使用する)
***********************************************************************/

//   初期状態 init から，目標状態 goal に至るまで前向き推論を行なう
function forwardReasoning(init, goal, ruleBase) {
  var wm = init,        // WM (ワーキングメモリ)
      ruleSet,          // WM に適用可能な(競合する)ルール(の名前)の集合(配列)
      rule,             // 選択されたルール(の名前)
      msg = "初期状態: ";
  init.backtrace = [];
  for (;;) {
    alert(msg+wm.toSource());                   // WM の表示
    if (isSubsetOf(goal, wm)) return wm.backtrace; // WM が目標状態を含む(成功)
    ruleSet = getRuleSet(wm, ruleBase);         // ルールベースと照合
    if (ruleSet.length==0) return false;        // 適用できるルールがない(失敗)
    rule = choiceRule(ruleSet, ruleBase, wm, goal); // 競合の解消
    wm = applyRule(rule, wm, ruleBase);         // ルールの適用，動作
    msg = rule + " 適用後: ";
  }
}

// ルールベースとの照合
//   WM に適用可能なルールのリストを得る
function getRuleSet(wm, ruleBase) {
  var rs = [];
  for (var r in ruleBase) {
    // 条件部がWMに含まれるルール(の名前)を rs に追加
    if (isSubsetOf(ruleBase[r].condition, wm)) rs.push(r);
  }
  return rs;
}

// 競合の解消
//   ルールの集合(リスト)から1つのルールを選択する
//   ここではユーザが選択するようにしているが，本来は自動的に選ぶ
function choiceRule(ruleSet, ruleBase, wm, goal) {
  var msg = "番号を入力してください．";
  for (var i=0; i<ruleSet.length; i++) {
    msg += "\n"+i+": " + ruleSet[i] + ":";
    msg += "\n    condition: " + ruleBase[ruleSet[i]].condition.toSource();
    msg += "\n    action: " + ruleBase[ruleSet[i]].action.toSource();
  }
  return ruleSet[prompt(msg)];
}

// ルールの適用(動作)
//   WM にルールを適用した結果の新しい WM の状態を得る
//   条件部の項を取り除き，動作部の項を追加する．
function applyRule(rule, wm, ruleBase) {
  with (ruleBase[rule]) {
    var wm2 = union(diffSet(wm, condition), action);
    wm2.backtrace = wm.backtrace.concat([rule]);
    return wm2;
  }
}

// 前向き推論の連鎖
//   ルールの(名前の)リストを与え，WMに順に適用した結果のWMを得る
function forwardChain(wm, rules, ruleBase) {
  for (var i=0; i<rules.length; i++) wm = applyRule(rules[i], wm, ruleBase);
  return wm;
}
