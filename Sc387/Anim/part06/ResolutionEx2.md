---
title: Example of a Refutation with Resolution Principle #2.
last_modified: 2023-05-28 14:41:14 +09:00

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
## 融合原理による反駁の例 (2)

$
\begin{array}{rl}
0：&(ゼロを表す) 個体定数\\
s：&(「次の数」を表す) 関数記号\\
\\
&0, 1, 2, 3, \cdots　⇒　0,\ s(0),\ s(s(0)),\ s(s(s(0))),\ \cdots\\
&　　（以下，便宜上 \overbrace{s(\cdots s(}^n \,0\,)\cdots) を \tilde{n} と略記する．例えば，\tilde3 は s(s(s(0))) を表すものとする．）\\
\\
A：&(加算を表す)述語記号：\quad A(x,y,z)\ は\ x+y\ が\ z\ に等しいことを表す．\\
M：&(乗算を表す)述語記号：\quad M(p,q,r)\ は\ p\times q\ が\ r\ に等しいことを表す．\\
F：&(階乗を表す)述語記号：\quad F(i,j)\ は\ i\ の階乗が\ j\ に等しいことを表す．\\
\end{array}
$

以下のように前提$\Gamma$と結論$\alpha$を与える．  
（加算・乗算・階乗の定義（前提$Γ$）と，3の階乗に等しい $v$ が存在するという命題（結論$α$））

$
\begin{array}{lll}
\Gamma = \{&\forall w A(0, w, w), \ \forall x \forall y \forall z (A(x, y, z)\rarr A(s(x), y, s(z))),\\
&\forall u M(0,u,0),\ \forall p \forall q \forall r \forall t (M(p,q,r)\land A(q,r,t)\rarr M(s(p),q,t)),\\
&F(0,\tilde1),\ \forall i \forall j \forall k (F(i,j)\land M(s(i),j,k)\rarr F(s(i),k))&\}\\
\end{array}
$ 

$
\begin{array}{l}
\alpha = \exist v F(\tilde3, v)
\end{array}
$

これらを節形式に変換．

$
\begin{array}{rll}
\mathcal S_\Gamma = \{&\{\ A(0, w, w)\ \},&\cdots (1)\\
&\{\ A(s(x), y,s(z)),\ \lnot A(x, y, z)\ \}&\cdots (2)\\
&\{\ M(0, u, 0)\ \},&\cdots (3)\\
&\{\ M(s(p), q,t),\ \lnot M(p, q, r),\ \lnot A(q, r, t)\ \}\}&\cdots (4)\\
&\{\ F(0,\tilde1)\ \},&\cdots (5)\\
&\{\ F(s(i), k),\ \lnot F(i, j),\ \lnot M(s(i), j, k)\ \}\}&\cdots (6)\\
\mathcal S_{\lnot\alpha}=\{&\{\ \lnot F(\tilde3, v)\ \}\}&\cdots (7)
\end{array}
$ 

$\mathcal S_\Gamma\cup \mathcal S_{\lnot\alpha}$からの反駁は以下の通り．
$$
\begin{array}{rll}
1.\ &\{\ \underline{\lnot F(\tilde3, v)}\ \} &(7)\\
2.\ &\{\ \underline{F(s(i), k)},\ \lnot F(i, j),\ \lnot M(s(i), j, k)\ \} &(6)\\
3.\ &\{\ \underline{\lnot F(\tilde2, j)},\ \lnot M(\tilde3, j, v)\ \}
	& 1,2;\ \sigma_1=\{\ \tilde2/i,\ v/k\ \}\\
4.\ &\{\ \underline{F(s(i_1), k_1)},\ \lnot F(i_1, j_1),\ \lnot M(s(i_1), j_1, k_1)\ \}
	&(6)\\
5.\ &\{\ \underline{\lnot F(\tilde1, j_1)},\ \lnot M(\tilde2, j_1, j),\ 
	     \lnot M(\tilde3, j, v)\ \}
	& 3,4;\ \sigma_2=\{\ \tilde1/i_1,\ j/k_1\ \}\\
6.\ &\{\ \underline{F(s(i_2),k_2)},\ \lnot F(i_2,j_2),\ \lnot M(s(i_2),j_2,k_2)\ \}&(6)\\
7.\ &\{\ \underline{\lnot F(0, j_2)},\ \lnot M(\tilde1, j_2, j_1),\ 
		 \lnot M(\tilde2, j_1, j),\ \lnot M(\tilde3, j, v)\ \}
	& 5,6;\ \sigma_3=\{\ 0/i_2,\ j_1/k_2\ \}\\
8.\ &\{\ \underline{F(0,\tilde1)}\ \} &(5)\\
9.\ &\{\ \underline{\lnot M(\tilde1, \tilde1, j_1)},\ 
		 \lnot M(\tilde2, j_1, j),\ \lnot M(\tilde3, j, v)\ \}
	& 7,8;\ \sigma_4=\{\ \tilde1/j_2\ \}\\
10.\ &\{\ \underline{M(s(p), q,t)},\ \lnot M(p, q, r),\ \lnot A(q, r, t)\ \} &(4)\\
11.\ &\{\ \underline{\lnot M(0, \tilde1, r)},\ \lnot A(\tilde1, r, j_1),\ 
		  \lnot M(\tilde2, j_1, j),\ \lnot M(\tilde3, j, v)\ \}
	 & 9,10;\ \sigma_5=\{\ 0/p,\ \tilde1/q,\ j_1/t\ \}\\
12.\ &\{\ \underline{M(0,u,0)}\ \} &(3)\\
13.\ &\{\ \underline{\lnot A(\tilde1, 0, j_1)},\ 
		  \lnot M(\tilde2, j_1, j),\ \lnot M(\tilde3, j, v)\ \}
	 & 11,12;\ \sigma_6=\{\ \tilde1/u,\ 0/r\ \}\\
14.\ &\{\ \underline{A(s(x), y,s(z))},\ \lnot A(x, y, z)\ \}&(2)\\
15.\ &\{\ \underline{\lnot A(0, 0, z)},\ 
		  \lnot M(\tilde2, s(z), j),\ \lnot M(\tilde3, j, v)\ \}
	 & 13,14;\ \sigma_7=\{\ 0/x,\ 0/y,\ s(z)/j_1\ \}\\
16.\ &\{\ \underline{A(0,w,w)}\ \} &(1)\\
17.\ &\{\ \underline{\lnot M(\tilde2, \tilde1, j)},\ \lnot M(\tilde3, j, v)\ \}
	 & 15,16;\ \sigma_8=\{\ 0/w,\ 0/z\ \}\\
18.\ &\{\ \underline{M(s(p), q,t)},\ \lnot M(p, q, r),\ \lnot A(q, r, t)\ \} &(4)\\
19.\ &\{\ \underline{\lnot M(\tilde1, \tilde1, r)},\ \lnot A(\tilde1, r, j),\ 
		  \lnot M(\tilde3, j, v)\ \}
	 & 17,18;\ \sigma_9=\{\ \tilde1/p,\ \tilde1/q,\ j/t\ \}\\
20.\ &\{\ \underline{M(s(p_1),q_1,t_1)},\ \lnot M(p_1,q_1,r_1),\ 
		  \lnot A(q_1,r_1,t_1)\ \} &(4)\\
21.\ &\{\ \underline{\lnot M(0,\tilde1,r_1)},\ \lnot A(\tilde1,r_1,r),\ 
		  \lnot A(\tilde1, r, j),\ \lnot M(\tilde3, j, v)\ \}
	 & 19,20;\ \sigma_{10}=\{\ 0/p_1,\ \tilde1/q_1,\ r/t_1\ \}\\
22.\ &\{\ \underline{M(0,u,0)}\ \} &(3)\\
23.\ &\{\ \underline{\lnot A(\tilde1,0,r)},\ 
		  \lnot A(\tilde1,r,j),\ \lnot M(\tilde3,j,v)\ \}
	 & 21,22;\ \sigma_{11}=\{\ \tilde1/u,\ 0/r_1\ \}\\
24.\ &\{\ \underline{A(s(x), y,s(z))},\ \lnot A(x, y, z)\ \}&(2)\\
25.\ &\{\ \underline{\lnot A(0,0,z)},\ \lnot A(\tilde1,s(z),j),\ \lnot M(\tilde3,j,v)\ \}
	 & 23,24;\ \sigma_{12}=\{\ 0/x,\ 0/y,\ s(z)/r\ \}\\
26.\ &\{\ \underline{A(0,w,w)}\ \} &(1)\\
27.\ &\{\ \underline{\lnot A(\tilde1,\tilde1,j)},\ \lnot M(\tilde3,j,v)\ \}
	 & 25,26;\ \sigma_{13}=\{\ 0/w,\ 0/z\ \}\\
28.\ &\{\ \underline{A(s(x), y,s(z))},\ \lnot A(x, y, z)\ \}&(2)\\
29.\ &\{\ \underline{\lnot A(0,\tilde1,z)},\ \lnot M(\tilde3,s(z),v)\ \}
	 & 27,28;\ \sigma_{14}=\{\ 0/x,\ \tilde1/y,\ s(z)/j\ \}\\
30.\ &\{\ \underline{A(0,w,w)}\ \} &(1)\\
31.\ &\{\ \underline{\lnot M(\tilde3,\tilde2,v)}\ \}
	 & 29,30;\ \sigma_{15}=\{\ \tilde1/w,\ \tilde1/z\ \}\\
32.\ &\{\ \underline{M(s(p), q,t)},\ \lnot M(p, q, r),\ \lnot A(q, r, t)\ \} &(4)\\
33.\ &\{\ \underline{\lnot M(\tilde2, \tilde2, r)},\ \lnot A(\tilde2, r, v)\ \}
	 & 31,32;\ \sigma_{16}=\{\ \tilde2/p,\ \tilde2/q,\ v/t\ \}\\
34.\ &\{\ \underline{M(s(p_1),q_1,t_1)},\ \lnot M(p_1,q_1,r_1),\ 
		  \lnot A(q_1,r_1,t_1)\ \} &(4)\\
35.\ &\{\ \underline{\lnot M(\tilde1,\tilde2,r_1)},\ \lnot A(\tilde2,r_1,r),\ 
		  \lnot A(\tilde2, r, v)\ \}
	 & 33,34;\ \sigma_{17}=\{\ \tilde1/p_1,\ \tilde2/q_1,\ r/t_1\ \}\hspace{1.5em}\\
36.\ &\{\ \underline{M(s(p_2),q_2,t_2)},\ \lnot M(p_2,q_2,r_2),\ 
		  \lnot A(q_2,r_2,t_2)\ \}\hspace{2.3em} &(4)\\
37.\ &\{\ \underline{\lnot M(0,\tilde2,r_2)},\ \lnot A(\tilde2,r_2,r_1),\ 
		  \lnot A(\tilde2,r_1,r),\ \lnot A(\tilde2, r, v)\ \}
	 & 35,36;\ \sigma_{18}=\{\ 0/p_2,\ \tilde2/q_2,\ r_1/t_2\ \}\\
38.\ &\{\ \underline{M(0,u,0)}\ \} &(3)\\
39.\ &\{\ \underline{\lnot A(\tilde2,0,r_1)},\ 
		  \lnot A(\tilde2,r_1,r),\ \lnot A(\tilde2, r, v)\ \}
	 & 37,38;\ \sigma_{19}=\{\ \tilde2/u,\ 0/r_2\ \}\\
40.\ &\{\ \underline{A(s(x), y, s(z))},\ \lnot A(x, y, z)\ \}&(2)\\
41.\ &\{\ \underline{\lnot A(\tilde1,0,z)},\ 
		  \lnot A(\tilde2,s(z),r),\ \lnot A(\tilde2, r, v)\ \}
	 & 39,40;\ \sigma_{20}=\{\ \tilde1/x,\ 0/y,\ s(z)/r_1\ \}\\
42.\ &\{\ \underline{A(s(x_1), y_1, s(z_1))},\ \lnot A(x_1, y_1, z_1)\ \}&(2)\\
43.\ &\{\ \underline{\lnot A(0,0,z_1)},\ 
		  \lnot A(\tilde2,s(s(z_1)),r),\ \lnot A(\tilde2, r, v)\ \}
	 & 41,42;\ \sigma_{21}=\{\ 0/x_1,\ 0/y_1,\ s(z_1)/z\ \}\\
44.\ &\{\ \underline{A(0,w,w)}\ \} &(1)\\
45.\ &\{\ \underline{\lnot A(\tilde2,\tilde2,r)},\ \lnot A(\tilde2, r, v)\ \}
	 & 43,44;\ \sigma_{22}=\{\ 0/w,\ 0/z_1\ \}\\
46.\ &\{\ \underline{A(s(x), y, s(z))},\ \lnot A(x, y, z)\ \}&(2)\\
47.\ &\{\ \underline{\lnot A(\tilde1,\tilde2,z)},\ \lnot A(\tilde2, s(z), v)\ \}
	 & 45,46;\ \sigma_{23}=\{\ \tilde1/x,\ \tilde2/y,\ s(z)/r\ \}\\
48.\ &\{\ \underline{A(s(x_1), y_1, s(z_1))},\ \lnot A(x_1, y_1, z_1)\ \}&(2)\\
49.\ &\{\ \underline{\lnot A(0,\tilde2,z_1)},\ \lnot A(\tilde2, s(s(z_1)), v)\ \}
	 & 47,48;\ \sigma_{24}=\{\ 0/x_1,\ \tilde2/y_1,\ s(z_1)/z\ \}\\
50.\ &\{\ \underline{A(0,w,w)}\ \} &(1)\\
51.\ &\{\ \underline{\lnot A(\tilde2, \tilde4, v)}\ \}
	 & 49,50;\ \sigma_{25}=\{\ \tilde2/w,\ \tilde2/z_1\ \}\\
52.\ &\{\ \underline{A(s(x), y, s(z))},\ \lnot A(x, y, z)\ \}&(2)\\
53.\ &\{\ \underline{\lnot A(\tilde1, \tilde4, z)}\ \}
	 & 51,52;\ \sigma_{26}=\{\ \tilde1/x,\ \tilde4/y,\ s(z)/v\ \}\\
54.\ &\{\ \underline{A(s(x_1), y_1, s(z_1))},\ \lnot A(x_1, y_1, z_1)\ \}&(2)\\
55.\ &\{\ \underline{\lnot A(0, \tilde4, z_1)}\ \}
	 & 53,54;\ \sigma_{27}=\{\ 0/x_1,\ \tilde4/y_1,\ s(z_1)/z\ \}\\
56.\ &\{\ \underline{A(0,w,w)}\ \} &(1)\\
57.\ &\square
	 & 55,56;\ \sigma_{28}=\{\ \tilde4/w,\ \tilde4/z_1\ \}\\
\end{array}
$$

$v\sigma_{1}\cdots\sigma_{28}=v\sigma_{26}\sigma_{27}\sigma_{28}=s(z)\sigma_{27}\sigma_{28}
=s(s(z_1))\sigma_{28}=s(s(\tilde4))=\tilde6$ 

- 偶数番目は，すべて $\mathcal S_Γ$ から導入した確定節である．
- 奇数番目は，最後の空節を除きすべて負節で，最初の (1)（ゴール節）を除き，直前の2つの節（ひとつ前の負節と直前に $\mathcal S_Γ$ から導入した確定節）の融合節である．