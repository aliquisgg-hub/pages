---
title: 今後の学習についてのヒント | Sc188(2) データサイエンス入門
last_modified: 2026-01-21 12:06:55 +09:00

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
   headerTemplate: 
      '<div style="width:100%;margin: 3mm 16mm;font-size:9pt;text-align:center;">
         <span style="display:inline-block;width:33%;text-align:left;">
         今後の学習について</span>
         <span style="display:inline-block;width:32%;text-align:center;"></span>
         <span style="display:inline-block;width:33%;text-align:right;"><!-- span class="date"></span --></span>
      </div>'
   footerTemplate: 
      '<div style="width:100%;margin: 3mm 16mm;font-size:9pt;text-align:center;">
         <span style="display:inline-block;width:33%;text-align:left;"></span>
         <span style="display:inline-block;width:32%;text-align:center;">
         <span class="pageNumber"></span>/<span class="totalPages"></span></span>
         <span style="display:inline-block;width:33%;text-align:right;"></span>
      </div>'

export_on_save:
   html: true
   puppeteer: true   # export PDF on save
---
<base target="_blank">

##  今後の学習についてのヒント
#### データサイエンスプログラム
-  この授業 Sc188(2) データサイエンス入門
   は，データサイエンスプログラムの必修科目に該当します．
-  データサイエンスプログラムは，必修科目2科目4単位＋選択科目3科目6単位
   を修得すれば，所定の手続きによって修了と認められます．
   | 区分 | 科目番号 | 科目名 | 学年・期  | 単位 | 備考 |
   |:----:| -------- | ------ |:--------:| ----:| ---- |
   | 必修 | Sc184(1) | IT基礎演習           | 1年前期 |2| 修得済みのはず |
   | ^    | Sc188(2) | データサイエンス入門  | 1年後期 |2| この科目 |
   | 選択 | Sc106(1) | 数学入門             | 1年前期 |2| これらの科目から<br>3科目6単位以上の<br>修得が必要  |
   | ^    | Sc104(2) | 解析学基礎           | 1年後期 |2| ^    |
   | ^    | Sc180(2) | 情報科学入門         | 1年後期 |2| ^    |
   | ^    | Sc285(1) | プログラミング演習   | 2年前期 |2| ^    |
   | ^    | Sc288(2) | データサイエンス演習$^†$| 2年後期 |2| ^    |
   | ^    | Sc387(1) | 人工知能論$^‡$       | 3年前期 |2| ^    |

    $^†$ Sc288(2) データサイエンス演習 (2年後期) は，24000台以降の学生のみが対象です．  
    $^‡$ Sc387(1) 人工知能論 は，2026年度から，3年後期に開講される予定です．((1)→(2))  
    &emsp;
-  この科目の単位が修得できれば，必修科目の4単位は修得済みとなっているはずなので，
   あとは選択科目の6科目から3科目以上修得すれば，(所定の手続きを経て)
   データサイエンスプログラムの修了となります！
-  [カリキュラムマップ／カリキュラムツリー](Misc/map.pdf)も参照してください．

#### データサイエンス全般について
-  この授業は入門編として，データサイエンスのトピックを広く浅く取り扱ってきました．
-  更に学習を深めるには，参考書に挙げた
   -  北川 源四郎・竹村 彰通 編『教養としてのデータサイエンス』，講談社，ISBN978-4-06-523809-7，(https://www.kspub.co.jp/book/detail/5238097.html)

   や，その他の書籍を読むのも良いでしょう．  
   (上記の本は改訂第2版が出ているようです)

   -  北川 源四郎・竹村 彰通 編『教養としてのデータサイエンス　改訂第2版』，講談社，ISBN978-4-06-537939-4，(https://www.kspub.co.jp/book/detail/5379394.html)

-  それ以外にも，データサイエンス全般，あるいは個別のトピックに関して，インターネット上にはさまざまな教材が転がっています．授業で出てきたキーワードを手がかりに，自分で探してみましょう．

#### データサイエンスの理論的な側面について
-  数学，特に*確率論*や*統計学*はデータサイエンスの基礎として重要です．([第6回](https://wwws.kobe-c.ac.jp/~miura/Sc188/part06/index.html)，[第7回](https://wwws.kobe-c.ac.jp/~miura/Sc188/part07/index.html))
   -  統計学はめちゃくちゃ広大なので，必要に応じてぼちぼちと学習を広げていくのが良いかも．
-  大量のデータを取り扱う際には*関係データベース* (*RDB*) を用いることが多いですが，その基礎となる*関係代数*の知識があれば，うまく取り扱う助けになります．([第8回](https://wwws.kobe-c.ac.jp/~miura/Sc188/part08/index.html))
-  人工知能 (AI) についての理解を深めるには，*情報理論*や*プログラミング*を含む*情報科学* (*コンピュータサイエンス*) の理解が求められます．
   -  ニューラルネットワークの理解には，やはり*解析学* (微積分) と*統計学*と*線形代数* (*ベクトルと行列*) の基礎は押さえておきたいところです．
   -  記号的な人工知能では，*述語論理*や*データ構造*や*プログラミング* (*アルゴリズム*) も押さえておきたいところです．

#### データサイエンスの技術的な側面について
-  具体的にデータを分析する際に用いるツールとしては，簡単な分析なら Excel が活用できますが，複雑な分析を行うには，統計ソフトやプログラミング言語を用いることが多くなります．
   -  [*Excel*](https://wwws.kobe-c.ac.jp/~miura/Sc188/#excel-関係) は熟練すれば，かなり色々なことができます．
      -  データタブで提供されている機能を用いると，データベースのようにも使うことができるようです．
      -  Excel アドインとして提供されている「分析ツール」や「ソルバー」も役に立ちます．
<!-- 
      -  Excel365 では，ホームタブにある「データ分析」アイコンで，ワークシート上のデータを元に，自動的にいくつかの分析をしてくれるようです．（望んでいるような分析をしてくれるかどうかは分かりませんが……）
 -->
      -  VBA (*V*isual *B*asic for *A*pplication = マクロ) を用いれば，Excel を操作するプログラムが書けるので，更にいろいろなことができます．(それを利用した統計ソフトもあります — 後述)
   -  統計ソフトは，有償，無償を含め，さまざまなものがあります．
      -  [*R*](https://ja.wikipedia.org/wiki/R%E8%A8%80%E8%AA%9E)．フリー (無償) の統計ソフトで，非常に高機能です．プログラミング言語としての側面もあるので，R言語 と呼ばれることもあります．AIや機械学習のためのパッケージ (機能を追加するソフトウェア) も充実しています．
         -  プログラミング言語としては，後述する Python に比べると，やや難しいかもしれません．
         -  Rの統合開発環境 [*RStudio*](https://ja.wikipedia.org/wiki/RStudio) も併用すると使いやすいかも．RStudio 上では，R Notebook という，Jupyter Notebook に (少し) 似たファイルも作れます．
      -  [*SPSS*](https://www.ibm.com/jp-ja/products/spss-statistics)．定番の統計ソフト (有償) です．非常に高機能ですが，AIや機械学習などにはあまり向いていないかもしれません．学内にはインストールされているPCもあります．
      -  [*HAD*](https://norimune.net/had)．フリー (無償) の統計ソフト．VBAで記述されており，普通のExcelで動き，豊富な機能を持っています．通常の統計解析では，あまり困ることはないと思いますが，AIや機械学習にはあまり向いていません．マクロ付きの Excel ファイル (HAD<i>xx_yyy</i>.xlsm; <i>xx_yyy</i> はバージョン番号) で提供されています．
   -  プログラミング言語としては，[*Python*](https://wwws.kobe-c.ac.jp/~miura/Sc188/#python-関係) が代表的です．
      -  この授業でも，.ipynb という拡張子のファイルのコード部分は，この Python で書かれていました．
      -  R言語などに比べると，比較的習得しやすいので，Sc285(1) プログラミング演習では，この言語を用いてプログラミングの学習をします．
      -  AIや機械学習，統計解析などのパッケージが非常に充実しており，最新の成果も比較的早く取り入れられるので，非常に広く使われています．
-  関係データベース (RDB) の取り扱いには，*SQL言語* の習得が役に立ちます．SQL言語は関係データベースへのアクセスや制御のための命令を持つ，関係データベース専用の言語で，多くの関係データベースシステムに採用されています．

<script>
let lm = new Date(document.lastModified).toLocaleString();
let pe = document.body.firstElementChild;
let elm = document.createElement("div");
elm.className = "lastModified right";
elm.innerHTML = `Last Modified: ${lm}`;
pe.insertBefore(elm, pe.firstChild);
</script>