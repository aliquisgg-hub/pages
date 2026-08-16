---
title: "Sc106(1) 小テスト：写像(2) の解説"
last_modified: 2025-05-25 11:08:20 +09:00

math: katex

export_on_save:
   html: true
---
## 問題
下のように定義される集合$P$と，$P$ 上で下のように (広義の) グラフで定義される写像
$i,f,g,h$ について，以下の設問に答えなさい．
$$
\begin{array}{ccl}
P&=&\{a,b,c\}\\
i&=&\{(a,a),(b,b),(c,c)\}\\
f&=&\{(a,c),(b,b),(c,c)\}\\
g&=&\{(a,c),(b,b),(c,a)\}\\
h&=&\{(a,c),(b,a),(c,b)\}\\
\end{array}
$$

## 解説
-   $i(x),\ f(x)\ g(x),\ h(x)$
    ###### ![](ifgh.svg)

-   $h^{-1}(x)$
    ###### ![](hinv.svg)

-   $i∘f(x)\ \ (=f(x))$
    ###### ![](f-i.svg)

-   $f∘i(x)\ \ (=f(x))$
    ###### ![](i-f.svg)

-   $g∘g(x)\ \ (=i(x))$
    ###### ![](g-g.svg)

-   $h∘h∘h(x)\ \ (=i(x))$
    ###### ![](h-h-h.svg)

|$x$|$$\begin{split}&i(x)\\=\ &g∘g(x)\\=\ &h∘h∘h(x)\end{split}$$|$$\begin{split}&f(x)\\=\ &i∘f(x)\\=\ &f∘i(x)\end{split}$$|$g(x)$|$h(x)$|$h^{-1}(x)$|
|:-:|:-:|:-:|:-:|:-:|:-:|
|$a$|$a$|$c$|$c$|$c$|$b$|
|$b$|$b$|$b$|$b$|$a$|$c$|
|$c$|$c$|$c$|$a$|$b$|$a$|