---
title: Sc387(1) Part 7
last_modified: 2022-06-30 12:49:24 +09:00

html:
  embed_local_images: false
  embed_svg: true
  offline: false
  toc: true

puppeteer:
  format: "A4"

export_on_save:
  html: true

toc:
  depth_from: 3
  depth_to: 5
  ordered: false
---
## 知識表現(3): 融合原理による証明系
<div class="tochead">目次：</div>
[TOC]

### 証明系

一般に，証明系は，<u>公理</u>（無条件で真とする論理式．通常は恒真式）の集合 $\mathcal A$ と<u>推論規則</u>（単一もしくは複数の論理式から新しい論理式を導く記号操作）の集合 $\mathcal R$ からなる．公理を元に推論規則を繰り返して用いて得られる論理式を<u>定理</u>という．*健全*な証明系では定理は恒真となる．

#### 証明

論理式 $\alpha$ について，以下の条件を満たす論理式の列 $\alpha_1,\cdots,\alpha_n$ を，$\alpha$ の<u>証明</u>という．

- 各 $\alpha_i$ は，以下のいずれかである
  - $\alpha_i\in\mathcal A$
  - $\alpha_i$ は，$\mathcal R$ に含まれる推論規則を用いて $\alpha_1,\cdots,\alpha_{i-1}$ から導かれる．
- $\alpha_n=\alpha$ である．

$\alpha$ の証明が存在するとき，$\alpha$ は<u>証明可能</u>であるといい，$\vdash\alpha$ と表現する．また，証明可能な論理式は<u>定理</u>と呼ばれる．

#### 演繹

前提（論理式）の集合 $\Gamma$ と論理式 $\alpha$ について，以下の条件を満たす論理式の列 $\alpha_1,\cdots,\alpha_n$ を，$\alpha$ の $\Gamma$ からの<u>演繹</u>という．

- 各 $\alpha_i$ は，以下のいずれかである
  - $\alpha_i\in\mathcal A$
  - $\underline{\alpha_i\in\Gamma}$
  - $\alpha_i$ は， $\mathcal R$ に含まれる推論規則を用いて $\alpha_1,\cdots,\alpha_{i-1}$ から導かれる．
- $\alpha_n=\alpha$ である．

$\alpha$ の $\Gamma$ からの演繹が存在するとき，$\alpha$ は $\Gamma$ から<u>演繹可能</u>であるといい，$\Gamma\vdash\alpha$ と表現する．また，$\alpha$ を 前提集合 $\Gamma$ から導かれた<u>結論</u>と呼ぶ．

#### 推論規則の例

以下に示すのは命題論理の推論規則の例であるが，述語論理は命題論理を包含するため，
これらの推論規則は述語論理の推論規則でもある．

以下では，$P,Q,R$ を任意の論理式とし，横線の上の論理式から，横線の下の論理式を導くものとして示す．

- 肯定式（modus ponens）
  $$
  \begin{array}{c}P\to Q\quad P\\\hline Q\end{array}
  $$
  
- 否定式（modus tollens）
  $$
  \begin{array}{c}P\to Q\quad \lnot Q\\\hline \lnot P\end{array}
  $$
  
- 三段論法（syllogism）
  $$
  \begin{array}{c}P\to Q\quad Q\to R\\\hline P\to R\end{array}
  $$

- 連言導入（$\land$-introduction）
  $$
  \begin{array}{c}P\quad Q\\\hline P\land Q\end{array}
  $$

#### 証明木・演繹木

論理式の列としての証明・演繹は各論理式がどの論理式から導かれたかが分かりにくいため，論理式間の「導く」「導かれる」関係を明示するために，証明木・演繹木を用いることがある．証明木・演繹木は，各ノードが論理式であるような木構造で，根ノードが定理または演繹の結論で，上向きに枝分かれする形で描かれる．各枝分かれは推論規則に対応し，枝分かれの上の論理式から下の論理式が導かれることを示す．枝分かれの末端（葉）は公理かまたは前提である．以下に演繹木の例を示す．

**例：**  
　$\Gamma=\{P,P\to Q,Q\to R\}$ から $P\land R$ を演繹する．

- 演繹
  $$
  \begin{array}{rcll}
  	1&:&P&\quad(\in\Gamma)\\
  	2&:&P\to Q&\quad(\in\Gamma)\\
  	3&:&Q\to R&\quad(\in\Gamma)\\
  	4&:&P\to R&\quad(\text{from }2,3;\ \text{syllogism})\\
  	5&:&P&\quad(\in\Gamma)\\
  	6&:&R&\quad(\text{from }4,5;\ \text{modus ponens})\\
  	7&:&P\land R&\quad(\text{from }1,6;\ \land\text{-introduction})
  \end{array}
  $$

- 演繹木

###### ![dtree](dtree.svg)

### 代入（置換）

代入（置換）を，自由変数を項で置き換えるものとして定義する．

- $t_1,\cdots,t_n$ を項，$x_1,\cdots,x_n$ を互いに異なる変数とするとき，<u>代入</u> $\sigma$ は以下のように定義される．

  $$
  \sigma=\{t_1/x_1,\cdots,t_n/x_n\}
  $$

- $\alpha$ を任意の論理式または項とするとき，$\alpha$ に代入 $\sigma=\{t_1/x_1,\cdots,t_n/x_n\}$ を適用したもの $\alpha\sigma$ は，$\alpha$ 中の自由な $x_1,\cdots,x_n$ の各々を，同時に $t_1,\cdots,t_n$ で置き換えたものになる．  
&nbsp;

  **例：**  
  　$\sigma=\{f(y)/x,\ a/y\}$ とするとき：
    $$
    \begin{array}{lcl}
    P(y,g(x,y))\ \sigma &=& P(a,g(f(y),a))\\
    (P(x,y) \land\forall x(Q(x)\to R(y)))\ \sigma
      &=& P(f(y),a) \land\forall x(Q(x)\to R(a))
    \end{array}
    $$
  　となる．なお，2つ目の例の左辺は，$\sigma$ を適用する前の論理式が  
  　$P(x,y) \land\forall z(Q(z)\to R(y))$ と同値（変数の名前替えによる）なので，
    $$
    (P(x,y) \land\forall z(Q(z)\to R(y)))\ \sigma
      \ =\  P(f(y),a) \land\forall z(Q(z)\to R(a))
    $$
    　と考える方が分かりやすいかもしれない．  
    &nbsp;

- $\sigma=\{t_1/x_1,\cdots,t_n/x_n\},\ \rho=\{u_1/y_1,\cdots,u_m/y_m\}$ とするとき，$\sigma$ と $\rho$ の<u>合成</u> $\sigma\circ\rho$ は，以下のように定義される．
  $$
  \sigma\circ\rho=\{t_1\rho/x_1,\cdots,t_n\rho/x_n\}
  \cup\{u_{k_1}/y_{k_1},\cdots,u_{k_{m^\prime}}/y_{k_{m^\prime}}\}
  $$
  ただし，$y_{k_1},\cdots,y_{k_{m^\prime}}$ は，$y_1,\cdots,y_m$ から $\{x_1,\cdots,x_n\}$ に含まれるものを取り除いたものである．

  $\alpha$ を任意の論理式または項とするとき，$\alpha(\sigma\circ\rho)=(\alpha\sigma)\rho$ が成り立つ．  
  &nbsp;

  **例：**  
  　$\sigma=\{f(y)/x, a/y\},\ \rho=\{a/x, b/y, c/z\}$ とするとき，  
  　$\sigma\circ\rho=\{f(b)/x, a/y, c/z\}$ となり，

    $$
    \begin{array}{lcl}
        P(y,g(x,z))(\sigma\circ\rho)&=&P(a,g(f(b),c))\\
        (P(y,g(x,z))\ \sigma)\ \rho&=&P(a,g(f(y),z))\ \rho=P(a,g(f(b),c))
      \end{array}
    $$
  ​　となるので，$P(y,g(x,z))(\sigma\circ\rho)$ と $(P(y,g(x,z))\ \sigma)\ \rho$ は等しい．

### 第1階述語論理の標準形（節形式）

#### リテラル・節・節集合

論理式の定義を拡張して，リテラル・節・節集合を以下のように定義する．

- リテラル

  - 正リテラル： 原子式を<u>正リテラル</u>と定義する．
  - 負リテラル： 原子式に否定記号 $\lnot$ を一つ付けたものを<u>負リテラル</u>と定義する．

  ※ 同じ原子式からなる正，負のリテラルは，互いに<u>相補</u>であるという．  
  &nbsp;

  **例：** 正リテラル $P(x,f(y))$ と負リテラル $\lnot P(x,f(y))$ は相補である  
  &nbsp;

- 節

  リテラルの集合を節と呼び，論理式の一種と考える．

  $L_1,\cdots,L_n$ をリテラルとするとき，その集合 $\mathcal C=\{L_1,\cdots,L_n\}$ は<u>節</u>であり，その解釈 $I$ における意味は，
  $$
  V_I[\mathcal C]=max(V_I[L_1],\cdots,V_I[L_n])
  =\underset{i=1}{\overset{n}{max}}\{V_I[L_i]\}
  $$
  すなわち，$L_1,\cdots,L_n$ のうち一つでも真のものがあれば真，すべて偽ならば偽となるものとする．（各リテラルの選言(or)と考える．$L_1\lor\cdots\lor L_n$ と同値）  
  &nbsp;

- 節集合

  節の集合を節集合と呼び，論理式の一種と考える．

  $\mathcal C_1,\cdots,\mathcal C_n$ を節とするとき，その集合 $\mathcal S=\{\mathcal C_1,\cdots,\mathcal C_n\}$ は<u>節集合</u>であり，その解釈 $I$ における意味は，
  $$
  V_I[\mathcal S]=min(V_I[\mathcal C_1],\cdots,V_I[\mathcal C_n])
  =\underset{i=1}{\overset{n}{min}}\{V_I[\mathcal C_i]\}
  $$
  すなわち，$\mathcal C_1,\cdots,\mathcal C_n$ のうち一つでも偽のものがあれば偽，すべて真ならば真となるものとする．（各節の連言(and)と考える．$\mathcal C_1\land\cdots\land \mathcal C_n$ と同値）

#### 冠頭標準形・スコーレム標準形

- 冠頭標準形

  任意の（閉）論理式は，それと同値な冠頭標準形と呼ばれる形の論理式に変換できる．
  
  $Q_1,\cdots,Q_n$ を $\forall,\exists$ のいずれかの限量記号，$x_1,\cdots,x_n$ を変数，$\mathcal S$ を節集合とするとき，
  $$
  Q_1x_1\cdots Q_nx_n\mathcal S
  $$
  の形をした論理式を<u>冠頭標準形</u>という．  
  &nbsp;

  **例1：**  
  　前回の課題の論理式 $\lnot\exists x(\exists y\ P(y,x)\to Q(x))$ は，
以下に示すように，同値な  
  　冠頭標準形（最終行の式）に変換できる．
  $$
	\begin{array}{ll}
	&\lnot\exists x(\exists y\ P(y,x)\to Q(x))\\
  =&\forall x\exists y(P(y,x)\land\lnot Q(x))\\
  =&\forall x\exists y\{\{P(y,x)\},\{\lnot Q(x)\}\}
  \end{array}
  $$

  **例2：**  
　$u,v,w,x,y,z$ を変数，$s$ を関数，$A$ を述語とする．
  $$
	\begin{array}{ll}
  &\forall w\ A(0,w,w)
		\land\forall x\forall y\forall z(\underline{A(x,y,z)\to A(s(x),y,s(z))})
		\land\underline{\lnot\forall u\exists v A(s(0),u,v)}\\
	=&\forall w\ A(0,w,w)
		\land\forall x\forall y\forall z(\lnot A(x,y,z)\lor A(s(x),y,s(z)))
		\land\underline{\exists u\forall v}\ \lnot A(s(0),u,v)\\
	=&\exists u\forall v(
			\underline{\forall w}\ A(0,w,w)
			\land\underline{\forall x\forall y\forall z}(\lnot A(x,y,z)\lor A(s(x),y,s(z)))
			\land\lnot A(s(0),u,v)
		)\\
	=&\exists u\forall v\forall w\forall x\forall y\forall z(
		A(0,w,w)\land(\lnot A(x,y,z)\lor A(s(x),y,s(z)))\land\lnot A(s(0),u,v)
	)\\
  =&\exists u\forall v\forall w\forall x\forall y\forall z
  	\{\{A(0,w,w)\},\{\lnot A(x,y,z),A(s(x),y,s(z))\},\{\lnot A(s(0),u,v)\}\}
  \end{array}
  $$

- スコーレム標準形

  冠頭標準形から決まった手順で限量を取り除いたものを<u>スコーレム標準形</u>または<u>節形式</u>と呼ぶ．この限量を取り除く手続きは<u>スコーレム化</u>と呼ばれる．

  1. 存在限量 $(\exists x)$ の除去
     
     1. 冠頭標準形 $Q_1x_1\cdots Q_nx_n\,\mathcal S$ の限量記号 $Q_1,\cdots,Q_n$ のうち，最も左にある存在限量記号を $Q_k$ とする．このとき，この冠頭標準形は
        $$
        \forall x_1\cdots\forall x_{k-1}\underline{\exists x_k}Q_{k+1}x_{k+1}\cdots Q_n x_n
          \,\mathcal S
        $$
        という形になる，このとき，$k-1$引数の新しい関数記号，例えば $f$ を用いて，
        以下のように変換する．
        （$\exists x_k$ を除去して，自由な $x_k$ を $f(x_1,\cdots,x_{k-1})$ で置き換える）
        $$
        \forall x_1\cdots\forall x_{k-1}\ Q_{k+1}x_{k+1}\cdots Q_n x_n
          \,\mathcal S\ \underline{\{f(x_1,\cdots,x_{k-1})/x_k\}}\\
        $$
        ※ $\{f(x_1,\cdots,x_{k-1})/x_k\}$ は $x_k$ を $f(x_1,\cdots,x_{k-1})$ で置き換える代入  
        ※ $k=1$のときは，0引数の関数の項（$f()$）ではなく定数（例えば $a$）を用いる．
        $$
        \underline{\exists x_1} Q_2x_2\cdots Q_n x_n\,\mathcal S\\
        ↓\\
        Q_{2}x_{2}\cdots Q_n x_n\,\mathcal S\ \underline{\{a/x_1\}}
        $$
        
     2. 1.を繰り返す．
     
  2. 全称限量 $(\forall x)$ の除去
  
     単に全称限量を取り除く（自由変数は全称限量されていると解釈する）
  
  上の手順で得られた節集合はスコーレム標準形（節形式）となる．  
  &nbsp;

  **例1：**（前回の課題の論理式，先の例1の続き）
  $$
  \begin{array}{l}
  \forall x\underline{\exists y}\{\{P(\underline y,x)\},\{\lnot Q(x)\}\}\\
  \hspace{15mm} ↓\ \exists y\ を除去して，自由な\ y\ を\ f(x)\ で置き換える\\
  \underline{\forall x}\{\{P(f(x),x)\},\{\lnot Q(x)\}\}\\
  \hspace{15mm} ↓\ \forall x\ を除去する\\
  \{\{P((f(x),x)\},\{\lnot Q(x)\}\}\\
  \end{array}
  $$
  
  **例2：**（先の例２の続き）
  $$
  \begin{array}{l}
  \underline{\exists u}\forall v\forall w\forall x\forall y\forall z
  	\{\{A(0,w,w)\},\{\lnot A(x,y,z),A(s(x),y,s(z))\},\{\lnot A(s(0),u,v)\}\}\\
  \hspace{15mm} ↓\ \exists u\ を除去して，自由な\ u\ を\ a\ で置き換える\\
  \underline{\forall v\forall w\forall x\forall y\forall z}
  	\{\{A(0,w,w)\},\{\lnot A(x,y,z),A(s(x),y,s(z))\},\{\lnot A(s(0),\underline{a},v)\}\}\\
  \hspace{15mm} ↓\ 全称限量\ \forall v\forall w\forall x\forall y\forall z\ をすべて除去する\\
  \{\{A(0,w,w)\},\{\lnot A(x,y,z),A(s(x),y,s(z))\},\{\lnot A(s(0),a,v)\}\}\\
  \end{array}
  $$
  
  一般に，元の冠頭標準形とそれを変換した節形式（スコーレム標準形）は同値ではないが，<u>元の冠頭標準形が充足不能であるならば，それを変換した節形式は充足不能となる．またその逆も成り立つ</u>．
