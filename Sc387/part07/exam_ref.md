---
title: Sc387(1) 小テスト：融合原理による反駁 解説
last_modified: 2024-06-08 10:58:40 +09:00

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
## 小テスト：融合原理による反駁 解説
$0$：（ゼロを表す）個体定数

$s$：（「次の数」を表す）関数記号  
　　$0, 1, 2, 3, \cdots$　⇒　$0, s(0), s(s(0)), s(s(s(0))), \cdots$

$A$：（加算を表す）述語記号  

<!--
前提 $\Gamma = \{\ \forall w A(0, w, w), \ \forall x \forall y \forall z (A(x, y, z)\rarr A(s(x), y, s(z)))\ \}$

結論 $\alpha = \exist v A(s(0), v, s(s(s(0))))$

　　( $\lnot\alpha = \forall v\ \lnot A(s(0), v, s(s(s(0)))$ )

$\Gamma\models\alpha$ を示すために，$\lnot(\Gamma\rarr\alpha)$ を節形式に変換して反駁する．

$\lnot(\Gamma\rarr\alpha)  \equiv \Gamma\land\lnot\alpha$ より，$\Gamma$ と $\lnot\alpha$ を別個に節形式 $S_\Gamma$ と $S_{\lnot\alpha}$ に変換すると，
-->

$$
\begin{array}{rlll}S_\Gamma = \{&\{\ A(0, w, w)\ \},&&\cdots (1)\\
&\{\ A(s(x), y,s(z)),\ \lnot A(x, y, z)\ \}&\}&\cdots (2)\\
S_{\lnot\alpha}=\{&\{\ \lnot A(s(0), v, s(s(s(0)))\ \}&\}&\cdots (3)\end{array}
$$

$S_\Gamma\cup S_{\lnot\alpha}$からの反駁：
$$
\begin{array}{rll}
1.\ &\{\ \underline{\lnot A(s(0), v, s(s(s(0)))}\ \}			&(3)\\
2.\ &\{\ \underline{A(s(x), y,s(z))},\ \lnot A(x, y, z)\ \}	&(2)\\
3.\ &\{\ \underline{\lnot A(0, v, s(s(0)))}\ \}
	&1,2;\ \sigma_1=\{\ 0/x,\ v/y,\ s(s(0))/z\}\\
4.\ &\{\ \underline{A(0, w, w)}\ \}	&(1)\\
5.\ &\square & 3,4;\ \sigma_2=\{\ s(s(0))/w,\ s(s(0))/v\ \}
\end{array}
$$

&emsp;&emsp;※ 反例としての $v$ の値は $(v\sigma_1)\sigma_2 = s(s(0))$．
