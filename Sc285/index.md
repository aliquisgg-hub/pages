---
title: Sc285(1) プログラミング演習 資料（旧版）
last_modified: 2026-08-30 17:15:33 +09:00

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

# Sc285(1) プログラミング演習 資料（旧版）

## 諸注意
- [一般的な注意事項](../Misc/attention.html)
- [課題レポート提出に関する諸注意](../Misc/report.html)
- [プログラム課題の課題採点基準](../Misc/scoring.html)
- [アドバイス等](advice.html)

## Python 関係
- [Python 実行環境](pyenv.html)
- [プログラミング言語 Python 総合情報サイト - python.jp](https://www.python.jp/)（外部サイト）
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
- [range() 関数と for 文](range.html)
- [Python 3.12 ドキュメント](https://docs.python.org/ja/3.12/)（外部サイト）  
  <!-- ※ 教室のバージョン (3.8.13) よりも新しい最新のバージョン (3.8.20) の  
  　 ドキュメントですが，ほぼ問題なく使えるはずです． -->
    - [組み込み関数](https://docs.python.org/ja/3.12/library/functions.html)
    - [mathモジュール（数学関数）](https://docs.python.org/ja/3.12/library/math.html)
- [東京大学のPythonテキスト](https://utokyo-ipp.github.io/index.html)（外部サイト）

## プログラミング関係

- [流れ図と構造化プログラミング](../strProg/strProg.html)

## Visual Studio Code 関係
- [Visual Studio Code のインストール](../vscDoc/vscInst.html)
- [Visual Studio Code の日本語化と初期設定](../vscDoc/vscInit.html)
- [Visual Studio Code の使用法](../vscDoc/index.html)
- [Jupyterノートブック形式のエクスポート](../vscDoc/export.html)


## 授業内で使用したファイル（.ipynb ファイルなど）
- [試してみよう (experience.ipynb)](ipynb/experience.ipynb)
- [「Python基礎の基礎」の例題 (tafExercise.ipynb)](ipynb/tafExercise.ipynb)
- [import についての補足 (tafPlus.ipynb)](ipynb/tafPlus.ipynb)
- [「文字列と入出力」の補足事項と例題 (strExercise.ipynb)](ipynb/strExercise.ipynb)
- [「条件式と分岐」の要約・補足 (ifPlus.ipynb)](ipynb/ifPlus.ipynb)
- [「条件式と分岐」の例題 (ifExercise.ipynb)](ipynb/ifExercise.ipynb)
- [ブール型と論理演算子のまとめ (logiPlus.ipynb)](ipynb/logiPlus.ipynb)
- [ブール型と論理演算子の例題 (logiExercise.ipynb)](ipynb/logiExercise.ipynb)
- [「while文によるループ」の要約・補足 (loopPlus.ipynb)](ipynb/loopPlus.ipynb)
- [「while文によるループ」の例題 (loopExercise.ipynb)](ipynb/loopExercise.ipynb)
- [「計算練習1」のコード例 (drill1.py)](py/drill1.py)
  - [流れ図と構造化プログラミング](../strProg/strProg.html) より
- [「関数の定義」の要約・補足 (funcPlus.ipynb)](ipynb/funcPlus.ipynb)
- [「関数の定義」の例題 (funcExercise.ipynb)](ipynb/funcExercise.ipynb)
- [オブジェクトとリスト の要約と補足 (listPlus.ipynb)](ipynb/listPlus.ipynb)
- [オブジェクトとリスト の例題 (listExercise.ipynb)](ipynb/listExercise.ipynb)
- [タプルとコレクション の要約と補足 (tuplePlus.ipynb)](ipynb/tuplePlus.ipynb)
- [ 計算練習プログラムのための部品となる関数を定義する (drill0.ipynb)](ipynb/drill0.ipynb)

<script>
let lm = new Date(document.lastModified).toLocaleString();
let pe = document.body.firstElementChild;
let elm = document.createElement("div");
elm.style.textAlign = "right";
elm.innerHTML = `Last Modified: ${lm}`;
pe.insertBefore(elm, pe.firstChild);
</script>