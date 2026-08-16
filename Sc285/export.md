---
title: Jupyterノートブック形式のエクスポート
last_modified: 2023-07-11 12:41:48 +09:00

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
# Jupyterノートブック形式（.ipynb）の<br>エクスポート

Visual Studio Code で，Jupyterノートブック形式（.ipynb）のファイルから
Python のコードを抽出するには，以下の手順で行う．

1. 上のタブの下のメニューの右端の三点メニューから，「エクスポート」を選ぶ．

   ![](ipynb_export.png)

1. 表示された選択肢から，「Python スクリプト」を選ぶ．

   ![](ipynb_export2.png)

1. 生成されたタブの内容を，Python ファイルとして，適当な名前で保存する．
   - 拡張子は .py とする．

※ コードセル以外の部分は，コメントとして残されているので，適宜編集してもよい．