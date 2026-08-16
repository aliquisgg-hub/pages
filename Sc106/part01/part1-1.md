---
title: "図説 集合演算 | Sc106(1)"
last_modified: 2023-03-19 10:15:21 +09:00

math: katex

html:
   embed_local_images: false
   embed_svg: true
   offline: false
   toc: true

puppeteer:
   format: "A4"
   margin:
      top: 25mm
      bottom: 15mm
      left: 20mm
      right: 20mm
   displayHeaderFooter: true
   headerTemplate: |
      <div style="width:100%;margin: 3mm 16mm;font-size:9pt;text-align:center;">
         <span style="display:inline-block;width:33%;text-align:left;"><span class="title"></span></span>
         <span style="display:inline-block;width:32%;text-align:center;"></span>
         <span style="display:inline-block;width:33%;text-align:right;"><span class="date"></span></span>
      </div>
   footerTemplate: |
      <div style="width:100%;margin: 3mm 16mm;font-size:9pt;text-align:center;">
         <span style="display:inline-block;width:33%;text-align:left;"></span>
         <span style="display:inline-block;width:32%;text-align:center;">
         <span class="pageNumber"></span>/<span class="totalPages"></span></span>
         <span style="display:inline-block;width:33%;text-align:right;"></span>
      </div>

export_on_save:
   html: true
---
# 図説 集合演算

## 集合演算

1. <div style="float: right; width:144px">

   ![](Ben1.svg)</div>
   $A\cup B\,=\,\{x\ |\ x∈A\ \lor\ x∈B\}\quad(\lor\text{ ： または})$  
   $A,B$ のいずれかに含まれる要素すべての集合  
   (集合の)和，*和集合*，合併集合，結び
   <div style="clear:right"></div>

1. <div style="float: right; width:144px;">

   ![](Ben2.svg)</div>
   $A\cap B\,=\,\{x\ |\ x∈A,\ x∈B\}$  
   $A,B$ に共通に含まれる要素すべての集合  
   (集合の)積，積集合，*共通部分*，共通集合，交わり
   <div style="clear:right"></div>

1. <div style="float: right; width:144px">

   ![](Ben3.svg)</div>
   $A\setminus B\,=\,\{x\ |\ x∈A,\ x\notin B\}$  
   $A$ の要素のうち，$B$ に含まれないものすべての集合  
   (集合の)差，*差集合*
   <div style="clear:right"></div>

1. <div style="float: right; width:144px">

   ![](Ben4.svg)</div>
   $A^c  \,=\, \{x\ |\ (x∈Ω,)\ x\notin A\}\,=\,Ω\setminus A$  
   普遍集合 $Ω$ の要素のうち，$A$ に含まれないものすべての集合  
   絶対補集合，*補集合*

## 集合代数

$$
\begin{array}{ll}
べき等律\\
\quad A∪A=A, & A∩A=A\\
結合律\\
\quad (A∪B)∪C=A∪(B∪C), & (A∩B)∩C=A∩(B∩C)\\
交換律\\
\quad A∪B=B∪A, & A∩B=B∩A\\
分配律\\
\quad A∪(B∩C)=(A∪B)∩(A∪C), & A∩(B∪C)=(A∩B)∪(A∩C)\\
同一律\\
\quad A∪\phi=A,\;\;A∪{\itΩ}={\itΩ}, & A∩{\itΩ}=A,\;\;A∩\phi=\phi\\
対合律\\
\quad (A^c)^c = A &\\
補元律\\
\quad A∪A^c=\itΩ,\;\;\itΩ^c=\phi, & A∩A^c=\phi,\;\;\phi^c=\itΩ\\
ド・モルガンの法則\\
\quad (A∪B)^c = A^c ∩ B^c, & (A ∩ B)^c = A^c∪B^c\\
\end{array}
$$