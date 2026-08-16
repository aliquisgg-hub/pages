---
title: "「小テスト：集合(2)」の解説"
last_modified: 2024-05-12 14:52:31 +09:00

math: katex

html:
   embed_local_images: false
   embed_svg: true
   offline: false
   toc: true

export_on_save:
   html: true
---
<style>
.cjk_fallback {
   font-family:sans-serif;
   font-size:82.6%;
   }
</style>

<!--
### 「小テスト：集合(2)」の解説
-->
#### 問題1 (省略)
#### 問題2

$$
\begin{array}{ll}
　((A ∪ B^c)∩(A ∪ C^c))^c　&\\
= (A ∪ (B^c ∩ C^c))^c      &∵ 分配律\\
= (A ∪ (B ∪ C)^c)^c        &∵ DeMorgan\\
= A^c ∩ (B ∪ C)^{cc}       &∵ DeMorgan\\
= A^c ∩ (B ∪ C)            &∵ 対合律\\
= (B ∪C)＼A\\
\end{array}
$$