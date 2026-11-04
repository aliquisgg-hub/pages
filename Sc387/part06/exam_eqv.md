---
title: Sc387(1) 小テスト：論理式の同値変換 解説
last_modified: 2026-11-04 17:27:26 +09:00

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
### 小テスト：論理式の同値変換 の過程と解答
$$
\begin{array}{cll}
  &\lnot\exists x(\underline{\exists y\ P(y,x)\to Q(x)})\\
= &\underline{\lnot\exists x}(\lnot\exists y\ P(y,x)\lor Q(x))
    &(含意 (→) の除去)\\
= &\forall x\underline{\lnot(\lnot\exists y\ P(y,x)\lor Q(x))}
    &(否定記号 (\lnot) と限量子 (\exists) の入れ替え)\\
= &\forall x(\underline{\lnot\lnot}\exists y\ P(y,x)\land \lnot Q(x))
    &(ド・モルガン則)\\
= &\forall x(\underline{\exists y}\ P(y,x)\land \lnot Q(x))
    &(二重否定則)\\
= &\forall x\exists y(P(y,x)\land\lnot Q(x))
    &(\,(\exists x\ P[x])\land R=\exists x(P[x]\land R)\,)
\end{array}
$$

