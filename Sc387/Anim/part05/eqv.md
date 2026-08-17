---
title: Sc387(1) 論理式の同値性
last_modified: 2025-05-26 17:04:06 +09:00

math: katex

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
## 論理式の同値性

$P,Q,R$ は任意の論理式，$\boldsymbol T$ は任意の恒真式，$\boldsymbol F$ は任意の矛盾式とする．

1. $P\leftrightarrow Q=(P\rightarrow Q)\land(Q\rightarrow P)$
1. $P\rightarrow Q=\lnot P\lor Q$，　　　　　　　$\underline{\lnot(P\rightarrow Q)=P\land\lnot Q}$
1. $P\land\boldsymbol T=P$，　　$P\land\boldsymbol F=\boldsymbol F$，　　$P\lor\boldsymbol T=\boldsymbol T$，　　$P\lor\boldsymbol F=P$
1. $\lnot(\lnot P)=P$　　（二重否定則）
1. $P\land P=P$，　　　　　　　　　　　$P\lor P=P$　　 　 （べき等則）
1. $P\land\lnot P=\boldsymbol F$，　　　　　　　　　　 $P\lor\lnot P=\boldsymbol T$　 　 （補元則）
1. $P\land Q=Q\land P$，　　　　　　　　　$P\lor Q=Q\lor P$　（交換則）
1. $(P\land Q)\land R=P\land(Q\land R)$，  
   $(P\lor Q)\lor R=P\lor(Q\lor R)$　　　　（結合則）
1. $P\land(Q\lor R)=(P\land Q)\lor(P\land R)$，  
   $P\lor(Q\land R)=(P\lor Q)\land(P\lor R)$　（分配則）
1. $\lnot(P\land Q)=\lnot P\lor\lnot Q$，  
   $\lnot(P\lor Q)=\lnot P\land\lnot Q$　　　　　　　 （ド・モルガン則）

$x,y$ は任意の変数，$P[x],Q[x]$ は自由変数 $x$ を含む任意の論理式，$R$ は変数 $x$ を自由変数として含まない任意の論理式とする．

1. $\forall x\ P[x]=\forall y\ P[y]$，　　$\exists x\ P[x]=\exists y\ P[y]$　　（変数の名前替え）
1. $\lnot\forall x\ P[x]=\exists x\ \lnot P[x]$，  
   $\lnot\exists x\ P[x]=\forall x\ \lnot P[x]$　　（否定記号と限量子の入れ替え）
1. $(\forall x\ P[x])\land R=\forall x(P[x]\land R)$，　　$(\forall x\ P[x])\lor R=\forall x(P[x]\lor R)$，<br>$(\exists x\ P[x])\land R=\exists x(P[x]\land R)$，　　$(\exists x\ P[x])\lor R=\exists x(P[x]\lor R)$
1. $\forall x(P[x]\land Q[x])=\forall x\ P[x]\land\forall x\ Q[x]$，  
   $\exists x(P[x]\lor Q[x])=\exists x\ P[x]\lor\exists x\ Q[x]$