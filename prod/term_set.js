/***********************************************************************
項の集合(リスト; 配列)を操作する関数群:

  eqTerm(s, t)     - 項sと項tが等しいかどうかを判定する述語関数
  isIn(t, S)       - 項tが集合Sに含まれるかどうかを判定する述語関数
  isSubsetOf(S, T) - 集合Sが集合Tに含まれるかどうかを判定する述語関数
  union(S, T)      - 集合Sと集合Tの和集合(合併集合)を生成する関数
  intersect(S, T)  - 集合Sと集合Tの積集合(共通集合)を生成する関数
  diffSet(S, T)    - 集合Sと集合Tの差集合を生成する関数

***********************************************************************/

// 項s と 項t が等しいかどうか
function eqTerm(s, t) {
  if (s.length!=t.length) return false;
  for (var i=0; i<s.length; i++) if (s[i]!=t[i]) return false;
  return true;
}

// t が S に含まれるかどうか (t∈S)
function isIn(t, S) { return S.some(function (s) { return eqTerm(s, t); }); }

// S が T の部分集合かどうか (S⊂T)
function isSubsetOf(S, T) { return S.every(function (s) { return isIn(s, T); }); }

// S と T の和集合 (S∪T)
function union(S, T) { return S.concat(T.filter(function (t) { return !isIn(t, S); })); }

// S と T の(共通集合)積集合 (S∩T)
function intersect(S, T) { return S.filter(function (s) { return isIn(s, T); }); }

// S と T の差集合 (S＼T)
function diffSet(S, T) { return S.filter(function (s) { return !isIn(s, T); }); }
