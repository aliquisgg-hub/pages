---
title: Sc188(2) データサイエンス入門 資料（旧版）
last_modified: 2026-08-30 17:14:49 +09:00

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

# Sc188(2) データサイエンス入門 資料（旧版）
<div style="float:right; background-color:pink; font-size:90%">

#### 目次：
<!-- 更新時は <div> を外すこと-->
<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=3 orderedList=false} -->
<!-- code_chunk_output -->

- [授業内のスライド](#授業内のスライド)
- [授業内で使用したサンプルファイル](#授業内で使用したサンプルファイル)
- [Excel 関係](#excel-関係)
- [Python 関係](#python-関係)
- [Visual Studio Code 関係](#visual-studio-code-関係)
- [その他](#その他)

<!-- /code_chunk_output -->
</div>

## 授業内のスライド

1. [データサイエンスとは／AIとは](part01/index.html) (<a href="part01/part01.pdf" download>pdf</a>)
1. [現代社会におけるデータサイエンス](part02/index.html) (<a href="part02/part02.pdf" download>pdf</a>)
1. [社会で活用されるデータ](part03/index.html) (<a href="part03/part03.pdf" download>pdf</a>)
1. [データやAIの使われ方](part04/index.html) (<a href="part04/part04.pdf" download>pdf</a>)
1. [さまざまなデータ処理の技術](part05/index.html) (<a href="part05/part05.pdf" download>pdf</a>)
1. [データ分析の基本](part06/index.html) (<a href="part06/part06.pdf" download>pdf</a>)
1. [確率・統計と数え上げ](part07/index.html) (<a href="part07/part07.pdf" download>pdf</a>)
1. [データの収集と加工](part08/index.html) (<a href="part08/part08.pdf" download>pdf</a>)
1. [データ分析の実際1 ～ 時系列データ分析 ～](part09/index.html) (<a href="part09/part09.pdf" download>pdf</a>)
1. [データ分析の実際2 ～ 文章データ分析 ～](part10/index.html) (<a href="part10/part10.pdf" download>pdf</a>)
1. [データ分析の実際3 ～ 教師あり学習 ～](part11/index.html) (<a href="part11/part11.pdf" download>pdf</a>)
1. [データ分析の実際4 ～ 教師なし学習 ～](part12/index.html) (<a href="part12/part12.pdf" download>pdf</a>)
1. [データを扱うときの注意点](part13/index.html) (<a href="part13/part13.pdf" download>pdf</a>)
1. [データセキュリティ](part14/index.html) (<a href="part14/part14.pdf" download>pdf</a>)

<div id="sample">

## 授業内で使用したサンプルファイル
-  第6回 データ分析の基本
   -  [data06.xlsx](https://wwws.kobe-c.ac.jp/~miura/Sc188/Data/data06.xlsx)
-  第7回 数え上げと確率・統計
   -  [data07.xlsx](https://wwws.kobe-c.ac.jp/~miura/Sc188/Data/data07.xlsx)
   -  [data07local.ipynb](https://wwws.kobe-c.ac.jp/~miura/Sc188/Data/data07local.ipynb)
      (旧：[data07.ipynb](https://wwws.kobe-c.ac.jp/~miura/Sc188/Data/data07.ipynb))
-  第8回 データの収集と加工
   -  [data08.xlsx](https://wwws.kobe-c.ac.jp/~miura/Sc188/Data/data08.xlsx)
   -  [data08.ipynb](https://wwws.kobe-c.ac.jp/~miura/Sc188/Data/data08.ipynb)
   -  [task08.xlsx](https://wwws.kobe-c.ac.jp/~miura/Sc188/Data/task08.xlsx)
   -  [task08.ipynb](https://wwws.kobe-c.ac.jp/~miura/Sc188/Data/task08.ipynb)
-  第9回 データ分析の実際1 ～ 時系列データ分析 ～
   -  [data09.ipynb](https://wwws.kobe-c.ac.jp/~miura/Sc188/Data/data09.ipynb)
   -  [data09.xlsx](https://wwws.kobe-c.ac.jp/~miura/Sc188/Data/data09.xlsx)
-  第10回 データ分析の実際2 ～ 文章データ分析 ～
   -  [data10.ipynb](https://wwws.kobe-c.ac.jp/~miura/Sc188/Data/data10.ipynb)
   -  [email.csv](https://wwws.kobe-c.ac.jp/~miura/Sc188/Data/email.csv)
   -  [Janome.ipynb](https://wwws.kobe-c.ac.jp/~miura/Sc188/Data/Janome/Janome.ipynb)
   -  [sangetsuki.txt](https://wwws.kobe-c.ac.jp/~miura/Sc188/Data/Janome/sangetsuki.txt)
   -  [mojika.txt](https://wwws.kobe-c.ac.jp/~miura/Sc188/Data/Janome/mojika.txt)
   -  [meijinden.txt](https://wwws.kobe-c.ac.jp/~miura/Sc188/Data/Janome/meijinden.txt)
-  第11回 データ分析の実際3 ～ クラス分類 (教師あり学習) ～
   -  [data11_1.ipynb](https://wwws.kobe-c.ac.jp/~miura/Sc188/Data/data11_1.ipynb)
   -  [data11_2.ipynb](https://wwws.kobe-c.ac.jp/~miura/Sc188/Data/data11_2.ipynb)
   -  [housing.csv](https://wwws.kobe-c.ac.jp/~miura/Sc188/Data/housing.csv)
-  第12回 データ分析の実際4 ～ 教師あり学習(回帰)・教師なし学習 ～
   -  [data12.ipynb](https://wwws.kobe-c.ac.jp/~miura/Sc188/Data/data12.ipynb)
   -  [basket_data.csv](https://wwws.kobe-c.ac.jp/~miura/Sc188/Data/basket_data.csv)
</div>

## Excel 関係
-  [MS Excel 2021 入門](https://wwws.kobe-c.ac.jp/deguchi/kc/office21/ex/index.html)
-  [MS Excel 2016～2021 応用編](https://wwws.kobe-c.ac.jp/deguchi/kc/office21/ex/excel2.html)
   -  [散布図（相関図）と近似曲線](https://wwws.kobe-c.ac.jp/deguchi/kc/office21/ex/excel2.html#scat)
   -  [クロス集計](https://wwws.kobe-c.ac.jp/deguchi/kc/office21/ex/excel2.html#cross)（ピボットテーブル）

## Python 関係
- [Python 実行環境](../python/pyenv.html)
-  [プログラミング言語 Python 総合情報サイト - python.jp](https://www.python.jp/)（外部サイト）
   -  [ゼロからのPython入門講座](https://www.python.jp/train/)
      1.  [Python初体験](https://www.python.jp/train/experience/)
      1.  [Python基礎の基礎](https://www.python.jp/train/type_and_func/)
      1.  [文字列と入出力](https://www.python.jp/train/string/)
      1.  [条件式と分岐](https://www.python.jp/train/if_condition/)
      1.  [ブール型と論理演算子](https://www.python.jp/train/logical_oper/)
      1.  [while文による繰り返し](https://www.python.jp/train/loop/)
      1.  [関数の定義](https://www.python.jp/train/function/)
      1.  [オブジェクトとリスト](https://www.python.jp/train/list/)
      1.  [辞書オブジェクト](https://www.python.jp/train/dict/)
      1.  [タプルとコレクション](https://www.python.jp/train/tuple/)
      1.  [演習](https://www.python.jp/train/exercise/)
-  [Python 3.12 ドキュメント](https://docs.python.org/ja/3.12/)（外部サイト）
   -  [組み込み関数](https://docs.python.org/ja/3.12/library/functions.html)
   -  [mathモジュール（数学関数）](https://docs.python.org/ja/3.12/library/math.html)
- [東京大学のPythonテキスト](https://utokyo-ipp.github.io/index.html)（外部サイト）

<!-- - [range() 関数と for 文](range.html) -->

## Visual Studio Code 関係
-  [Visual Studio Code のインストール](../vscDoc/vscInst.html)
-  [Visual Studio Code の日本語化と初期設定](../vscDoc/vscInit.html)
-  [Visual Studio Code の使用法](../vscDoc/index.html)
-  [Jupyterノートブック形式のエクスポート](../vscDoc/export.html)

## その他
-  [AIテキストマイニング](https://textmining.userlocal.jp/)（外部サイト）
-  [今後の学習について](future.html)

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