---
title: Python 実行環境
last_modified: 2025-09-09 17:20:06 +09:00

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
# Python 実行環境 {ignore}

自宅で Python を実行できるようにするには，いくつかの方法がある．
この文書では，以下の方法について解説する．

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Python をインストールする前に](#python-をインストールする前に)
- [Miniconda or Anaconda をインストールする．](#miniconda-or-anaconda-をインストールする)
- [Python公式パッケージをインストールする．](#python公式パッケージをインストールする)
- [Google Colaboratory を利用する．](#google-colaboratory-を利用する)
- [その他](#その他)

<!-- /code_chunk_output -->

## Python をインストールする前に
まず，授業でも利用する Jupyter Notebook 形式のファイル[^ipynb]を扱うためには，Visual
Studio Code をインストールしておくとよい．

1. [Visual Studio Code のインストール](https://wwws.kobe-c.ac.jp/~miura/vscDoc/vscInst.html)
1. [Visual Studio Code の日本語化と初期設定](https://wwws.kobe-c.ac.jp/~miura/vscDoc/vscInit.html)
    - 開くフォルダーは，授業に合わせて設定しておくと便利．
      <!-- - Sc185(2) IT応用演習なら `public_html` -->
      - Sc188(2) データサイエンス入門なら `Sc188`
      - Sc285(1) プログラミング演習なら `Sc285`

      など．
    - **おすすめの設定項目** の最後の2つ **拡張機能 > Emmet > Show Expanded Abbreviation** と **拡張機能 > HTML > Auto Closing Tags** は飛ばしてもよい．
    - 拡張機能は，**W3C Web Validator** はインストールしなくてもよいが，**PrintCode** と **Python** をインストールしておく．


## Miniconda or Anaconda をインストールする．

*2022年度の後期以降*は，教室のPC（CSLドメインPC）はこの方法でインストールされている（Miniconda 3.12）．

後述する[Python公式パッケージによるインストール](#python公式パッケージをインストールする)では，複数の[仮想環境](https://www.python.jp/install/windows/venv.html)の管理がやや煩雑であるため，[Anaconda](https://www.anaconda.com/) または [Miniconda](https://www.anaconda.com/docs/getting-started/miniconda/main) と呼ばれるパッケージをインストールするのをお勧めする．

この Anaconda は，科学技術計算のためのさまざまなライブラリがあらかじめインストール済みであるため，授業で必要なライブラリを改めてインストールする必要はないが，（Python 以外の）さまざまなツールも含んでいるため，サイズが大きく（数GB），インストールにも時間がかかる．Miniconda は，この Anaconda の縮小版で，あらかじめインストールされるライブラリは最小限にとどめられているので，サイズは小さく（数十MB）インストールはすぐに終わるが，必要なライブラリは個別にインストールする必要がある．

Anaconda でも，必要なライブラリを個別にインストールする局面は出てくる可能性があるので，個人的には Miniconda の方をお勧めする．

Anaconda や Miniconda のダウンロード/インストール手順はしばしば変更されるので、適当に「Anaconda インストール」等で検索して調べるとよい（例えば「[[Python3/Anaconda]Windows11に環境構築する](https://qiita.com/sankakuboushi/items/d995af832357fdf88b37)」など）．概略を以下にまとめておく．

- [Getting started with Anaconda](https://www.anaconda.com/docs/getting-started/getting-started) に解説動画 (英語) がある．
- Anaconda/Miniconda のパッケージは「[Download Now](https://www.anaconda.com/download/success)」から最新版がダウンロードできる (左の Distribution Installers が Anaconda，右の Miniconda Installers が Miniconda)．最新版は Python 3.13 だが，「[Index of /archive](https://repo.anaconda.com/archive/)」(Miniconda は「[Index of /miniconda](https://repo.anaconda.com/miniconda/)」)から古いバージョンのパッケージをダウンロードすることもできる．[^Ana]
  [^Ana]:教室と同じ Python 3.12 を使いたい場合，Anaconda は `Anaconda3-2024.10-1-` で始まるパッケージ，Miniconda は `Miniconda3-py312_` で始まる最新のパッケージを選ぶとよい．なお，最新版をインストールした後で conda を用いて Python を入れ替えることもできる．
- Windows版の場合，パスに日本語が含まれないようなフォルダにインストールすること．また，複数の Python をインストールしない場合は，**Add Anaconda3 to my PATH environment variable** にチェックを入れておいてもよい．
- Python のライブラリを追加する場合は，`conda` を用いる（<u>`pip` は用いない方が良い</u>）．Miniconda に授業で用いるライブラリを追加するには，**Anaconda Prompt**（Windowsボタン > Anaconda3 (64bit) > Anaconda Prompt (anaconda3) など）で，以下のコマンドを順に実行する．（<u>通常のコマンドプロンプトでは実行できないので注意</u>）

  <!-- conda config --append channels conda-forge -->
  ```powershell
  conda install -y openpyxl
  conda install -y requests
  conda install -y ipykernel
  conda install -y nbformat
  conda install -y notebook
  conda install -y matplotlib
  conda install -y plotly
  conda install -y vega_datasets
  conda install -y scikit-learn
  conda install -y mlxtend
  conda install -y wordcloud
  conda install -y prophet
  conda install -y statsmodels
  conda install -y opencv
  conda install -y janome -c conda-forge
  ```
  <!-- [^conda-forge]
  [^conda-forge]:最後の1行は，`conda install -y conda-forge::janome` でもよいかもしれない． -->
## Python公式パッケージをインストールする．

*2022年度の前期*は，教室のPC（CSLドメインPC）はこの方法でインストールされていた．

教室と（ほぼ）同じ環境にするには，バージョン 3.12 をインストールした後，いくつかのライブラリを追加する．おおむね，以下のような手順となる．  
（MacOS の場合は「[macOS環境のPython](https://www.python.jp/install/macos/index.html)」も参照すること）

1. [Python公式パッケージのインストール](https://www.python.jp/install/windows/install.html)
    - バージョン 3.12 を選んでインストールする．
    - Windows の 64bit か 32bit かの判別については，[こちら](https://wwws.kobe-c.ac.jp/~miura/vscDoc/vscInst.html#winsys)を参照すること
    - **Add Python 3.8 to PATH** にチェックを入れるのを忘れないように．
1. Python のライブラリの追加
    - ライブラリの追加には [pip コマンド](https://www.python.jp/install/windows/pip.html)を用いる．コマンドプロンプト（Windowsボタン > Windowsシステムツール > コマンドプロンプト）で，以下のコマンドを順に実行する（1行入力して Enter（さまざまなメッセージが出る．結構時間がかかることもある）を，1行ずつ順に行う）．
      ```powershell
      pip install openpyxl
      pip install requests
      pip install ipykernel
      pip install nbformat
      pip install notebook
      pip install matplotlib
      pip install plotly
      pip install vega_datasets
      pip install scikit-learn
      pip install mlxtend
      pip install wordcloud
      pip install prophet
      pip install statsmodels
      pip install opencv
      pip install janome
      ```

## Google Colaboratory を利用する．

Google のアカウントがあれば，Google のサービス Google Colaboratory も利用できる．

教室のシステム（Visual Studio Code ＋ Python）では，Jupyter Notebook 形式のファイル[^ipynb]を扱うことができるが，Google Colaboratory は，インターネットのクラウド（Googleドライブ）上で Jupyter Notebook 形式のファイルを入力・編集・実行・保存できるシステムである．

利用の手順は「[Google Colab の準備](https://www.python.jp/train/experience/colab.html)」を参考にするとよい．
[^ipynb]:Python のプログラムと文章が混在したファイルで，プログラムやファイルを入力・編集しながら，入力・編集したプログラムをすぐに実行できる形式のファイル．拡張子は `.ipynb`

お手軽に利用できるが，以下の点で注意が必要である．

- ファイルはすべて Google ドライブ上に保存されるので，手元の PC と共有したい場合は，ファイルのアップロード/ダウンロードが必要になる．
- 編集した内容は，定期的に自動保存されるので，ある意味では便利であるが，大幅に編集した後にその編集を取り消したい場合は少し困る．（Google ドライブの「版を管理」の機能を使えば復元できるが……）
- 追加でインストールしたライブラリは，ファイルを閉じると元に戻ってしまうので，毎回インストールし直す必要がある（よく用いられるライブラリの多くはあらかじめインストールされているので，あまり問題にはならないかもしれない）．
  - `janome` パッケージと日本語フォント(IPAゴシック)を用いる場合は，コードセルで以下のコマンドを実行しておく．
    ```
    !pip install janome
    !apt-get -y install fonts-ipafont-gothic
    ```
    なお，この日本語フォントを `WordCloud(…)` で使用する際は，引数で `font-path="/usr/share/fonts/opentype/ipafont-gothic/ipag.ttf"` のように指定する
- プログラムに読み込ませるデータファイルやプログラムが出力したファイルの取り扱いがやや煩雑である．[^colab]
- 現時点では（2025/9/9）では，Python のバージョンは 3.12.11 である（普通に使えるバージョンなので，特に問題はない）．
[^colab]:Google ドライブを Google Colaboratory の記憶装置に接続したり，Google Colaboratory の記憶装置との間でアップロード/ダウンロードを行ったりする必要がある．

## その他

- **[WinPython](https://winpython.github.io)**： Windows用の Python のパッケージ．PCの設定に影響を与えないように設計されているので，USBメモリに書き込んで持ち運んで使うこともできる．Visual Studio Code も，[PCの設定に影響を与えないインストール方法（ポータブルモード）](https://code.visualstudio.com/docs/editor/portable)があるので，併用すると教室と同様の環境をUSBメモリに書き込んで持ち運べる[^WinPython]．検索すれば日本語の資料も出てくるので，研究する価値はあるかも．
[^WinPython]: 実験的に試してみて，一応実現できたが，常にうまくいくかどうかはよくわからない……．

<script>
let lm = new Date(document.lastModified).toLocaleString();
let pe = document.body.firstElementChild;
let elm = document.createElement("div");
elm.style.textAlign = "right";
elm.innerHTML = `Last Modified: ${lm}`;
pe.insertBefore(elm, pe.firstChild);
</script>