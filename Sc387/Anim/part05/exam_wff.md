---
title: Sc387(1) 小テスト：論理式の問題 解説
last_modified: 2023-05-24 21:52:03 +09:00

html:
  embed_local_images: false
  embed_svg: true
  offline: false
  toc: true

puppeteer:
  format: "A4"

export_on_save:
  html: true
---
## 小テスト：論理式の問題
### 問題
> $p$： プラトン，  
> $x$： 個体（人）を表す変数，  
> $f(x)$：（$x$ の）父親，  
> $P(x)$：（$x$ は）哲学者である，  
> $G(x)$：（$x$ は）天才である，  
> $Q(x)$：（$x$ は）無口である．

### 解答
#### 問題1

1. 「プラトンは天才である」→　$G(p)$
1. 「人はみな哲学者である」→　$\forall x\,P(x)$
1. 「どの哲学者も天才ではない」→　$\forall x\,(P(x)\rightarrow\lnot G(x))$
1. 「父親がみんな哲学者であるわけではない」→　$\lnot\,\forall x\,P(f(x))$

#### 問題2（順不同）

- $\forall x\,(Q(x)\land G(x)\rightarrow P(x))$　→
  「無口な天才は哲学者である」  
  (「(いかなる者であれ) 無口でかつ天才であるならば，哲学者である」)
- $\forall x\,(Q(x)\rightarrow G(x)\lor P(x))$　→
  「無口な人は天才か哲学者である」  
  (「(いかなる者であれ) 無口であるならば，天才であるかまたは哲学者である」)
- $\forall x\,\lnot(Q(x)\land G(x)\land P(x))$　→
  「無口な天才の哲学者はいない」  
  (「(いかなる者であれ) 無口であり，かつ天才であり，かつ哲学者である，というようなことはない」)
