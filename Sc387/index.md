---
title: Sc387(2) 人工知能論 資料
last_modified: 2026-09-08 12:22:26 +09:00

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
<base target="_blank">

# Sc387(2) 人工知能論 資料
<!-- <div style="float:right; background-color:pink; font-size:90%"> -->

<!-- #### 目次： -->
<!-- 更新時は <div> を外すこと-->
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=3 orderedList=false} -->
<!-- code_chunk_output -->
<!-- 
- [参考資料](#参考資料)
 -->
<!-- /code_chunk_output -->
<!-- </div> -->

## 参考資料
-   [木・グラフの縦型・横型探索の手順 (.pdf)](dfs_bfs.pdf)
-   木・グラフの探索例のアニメーション
    -   [木の縦型探索例](Anim/tdfs/index.html)
    -   [木の横型探索例](Anim/tbfs/index.html)
    -   [グラフの縦型探索例](Anim/gdfs/index.html)
    -   [グラフの縦型探索例](Anim/gbfs/index.html)

-   [評価値を用いた探索の手順 (.pdf)](bestfs.pdf)
-   評価値を用いた探索例のアニメーション
    -   [行く末評価のみを用いた場合の例](Anim/heus/index.html)
    -   [来し方評価のみを用いた場合の例（分枝限定探索）](Anim/bb/index.html)
    -   [来し方・行く末の両方の評価を用いた場合の例](Anim/bestfs/index.html)

-   [4-queen 問題 （状態空間グラフバージョン）(.pdf)](ex01.pdf)
    -   [その課題の解答例 (.pptx)](ex01a.pptx)
    -   [その続きの課題（評価値を用いた探索）(.pdf)](ex02.pdf)
    -   [その解答例 (.pptx)](ex02a.pptx)


<!-- <div id="footer"><a href="http://wwws.kobe-c.ac.jp/~miura/">三浦欽也</a>
(<a href="mailto:miura@mail.kobe-c.ac.jp">miura@mail.kobe-c.ac.jp</a>)</div> -->

<script>
let lm = new Date(document.lastModified).toLocaleString();
let pe = document.body.firstElementChild;
let elm = document.createElement("div");
elm.style.textAlign = "right";
elm.innerHTML = `Last Modified: ${lm}`;
pe.insertBefore(elm, pe.firstChild);

document.querySelectorAll("#sample a").forEach(a => {
   console.log(a.href.split("/").pop())
   a.download = a.href.split("/").pop();
});
</script>