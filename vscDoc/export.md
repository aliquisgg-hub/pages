---
title: Jupyterノートブック形式のエクスポート
last_modified: 2022-09-05 15:55:36 +09:00

html:
   embed_local_images: false
   embed_svg: true
   offline: false
   toc: true

puppeteer:
   format: "A4"

export_on_save:
   html: true

toc:
   depth_from: 2
   depth_to: 5
   ordered: false
---
# Jupyterノートブック形式（.ipynb）の<br>エクスポート

Visual Studio Code で，Jupyterノートブック形式（.ipynb）のファイルから
Python のコードを抽出したり，HTML 形式に変換したりできる．以下の手順で行う．

1. 上のタブの下のメニューの右端の三点メニューから，「**エクスポート**」を選ぶ．  
   ![Export](img/ipynb_export.png)

1. 表示された選択肢から，エクスポートする形式を選ぶ．  
   ![形式](img/ipynb_export2.png)

   -  Python コードのファイルを抽出するには，「**Python スクリプト**」を選ぶ．
      -  生成されたタブの内容を，Python ファイルとして，適当な場所に適当な名前で保存する．
      -  拡張子は .py とする．

      ※ コードセル以外の部分は，コメントとして残されているので，適宜編集してもよい．
   -  HTML 形式に変換する場合は「**HTML**」を選ぶ．
      -  エクスポートが完了すると「名前を付けて保存」のウィンドウが開くので，
         適当な場所に適当な名前で保存する．
      -  保存後，右下で「エクスポートしたファイルを開きますか?」と聞いてくる．
         「はい」を選ぶとブラウザに表示されるので，すぐに内容を確認したい場合や印刷したい場合は「はい」を選ぶとよい．
         ![開くか?](img/ipynb_export3.png)