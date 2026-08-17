---
title: Sc387(1) 小テスト：論理式の同値変換 解説
last_modified: 2023-05-24 21:52:59 +09:00

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
\begin{array}{cl}
	 &\lnot\exists x(\underline{\exists y\ P(y,x)\to Q(x)})\\
	=&\underline{\lnot\exists x}(\lnot\exists y\ P(y,x)\lor Q(x))\\
	=&\forall x\underline{\lnot(\lnot\exists y\ P(y,x)\lor Q(x))}\\
	=&\forall x(\underline{\lnot\lnot}\exists y\ P(y,x)\land \lnot Q(x))\\
	=&\forall x(\underline{\exists y}\ P(y,x)\land \lnot Q(x))\\
	=&\forall x\exists y(P(y,x)\land\lnot Q(x))
\end{array}
$$

