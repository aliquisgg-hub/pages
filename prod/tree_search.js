// 深さ優先探索(節点カウント)
function treeDFSearch(root) {
  var S = [ root ],     // 探索待ち節点の集合
      s,                // 注目節点
      n = 0;            // 節点のカウンタ
  while (S.length>0) {  // Sが空でない限り反復
    s = S.shift();      // Sの先頭から節点を(1つ)取り出す (Sからは除かれる)
    n++;
    switch (processNode(s)) {
    case true:  return n;               // processNode(s)がtrueなら終了
    case false: break;                  // processNode(s)がfalseなら枝刈り
    default:    S = next(s).concat(S);  // Sの先頭にnext(s)を追加
    }
  }
  return n;
}

// 幅優先探索(節点カウント)
function treeBFSearch(root) {
  var S = [ root ],     // 探索待ち節点の集合
      s,                // 注目節点
      n = 0;            // 節点のカウンタ
  while (S.length>0) {  // Sが空でない限り反復
    s = S.shift();      // Sの先頭から節点を(1つ)取り出す (Sからは除かれる)
    n++;
    switch (processNode(s)) {
    case true:  return n;               // processNode(s)がtrueなら終了
    case false: break;                  // processNode(s)がfalseなら枝刈り
    default:    S = S.concat(next(s));  // Sの末尾にnext(s)を追加する
    }
  }
  return n;
}
