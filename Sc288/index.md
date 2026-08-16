---
title: Sc288(2) データサイエンス演習 資料
last_modified: 2025-09-17 17:31:00 +09:00

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
# Sc288(2) データサイエンス演習 資料
<div style="float:right; background-color:pink; font-size:90%">

#### 目次：
<!-- 更新時は <div> を外すこと-->
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=3 orderedList=false} -->
<!-- code_chunk_output -->

- [諸注意](#諸注意)
- [Visual Studio Code 関係](#visual-studio-code-関係)
- [Python 関係](#python-関係)
- [参考資料 (他の授業の資料など)](#参考資料-他の授業の資料など)

<!-- /code_chunk_output -->
</div>

## 諸注意
-  [一般的な注意事項](../Misc/attention.html)
-  [自習時のパソコン教室利用について](https://portal.kobe-c.ac.jp/guide/812) 
-  [パソコン教室の禁止事項 及び 注意事項](https://com.kobe-c.ac.jp/pdf/c1/pc_riyou.pdf)
   ![PDF](https://portal.kobe-c.ac.jp/wp/wp-content/uploads/2021/07/pdf_small.gif)
-  [演習科目履修について](https://portal.kobe-c.ac.jp/guide/818)

## Visual Studio Code 関係
-  [Visual Studio Code のインストール](../vscDoc/vscInst.html)
-  [Visual Studio Code の日本語化と初期設定](../vscDoc/vscInit.html)
-  [Visual Studio Code の使用法](../vscDoc/index.html)
-  [Jupyterノートブック形式のエクスポート](../vscDoc/export.html)
   
## Python 関係
-  [Python 実行環境](../python/pyenv.html)
-  [プログラミング言語 Python 総合情報サイト - python.jp](https://www.python.jp/)（外部サイト）
   - [ゼロからのPython入門講座](https://www.python.jp/train/)
      1. [Python初体験](https://www.python.jp/train/experience/)
      1. [Python基礎の基礎](https://www.python.jp/train/type_and_func/)
      1. [文字列と入出力](https://www.python.jp/train/string/)
      1. [条件式と分岐](https://www.python.jp/train/if_condition/)
      1. [ブール型と論理演算子](https://www.python.jp/train/logical_oper/)
      1. [while文による繰り返し](https://www.python.jp/train/loop/)
      1. [関数の定義](https://www.python.jp/train/function/)
      1. [オブジェクトとリスト](https://www.python.jp/train/list/)
      1. [辞書オブジェクト](https://www.python.jp/train/dict/)
      1. [タプルとコレクション](https://www.python.jp/train/tuple/)
      1. [演習](https://www.python.jp/train/exercise/)
-  [range() 関数と for 文](../python/range.html)
-  [Python 3.12 ドキュメント](https://docs.python.org/ja/3.12/)（外部サイト）  
※ 教室のバージョン (3.12.8) よりも新しいバージョンのドキュメント  
　 ですが，ほぼ問題なく使えるはずです．
   - [組み込み関数](https://docs.python.org/ja/3.12/library/functions.html)
   - [mathモジュール（数学関数）](https://docs.python.org/ja/3.12/library/math.html)
-  [東京大学のPythonテキスト](https://utokyo-ipp.github.io/index.html)（外部サイト）

## 参考資料 (他の授業の資料など)
-  [Sc188(2) データサイエンス入門 の資料](../Sc188/)
-  [Sc285(1) プログラミング演習 の資料](../Sc285/)
   -  [流れ図と構造化プログラミング](../Sc285/strProg/strProg.html)

<script>
let lm = new Date(document.lastModified).toLocaleString();
let pe = document.body.firstElementChild;
let elm = document.createElement("div");
elm.style.textAlign = "right";
elm.innerHTML = `Last Modified: ${lm}`;
pe.insertBefore(elm, pe.firstChild);
</script>