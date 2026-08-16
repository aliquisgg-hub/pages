---
title: プログラム課題の課題採点基準
last_modified: 2022-03-22 15:56:43 +09:00

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
# プログラム課題の課題採点基準
## 基本原則

- 課題の指示内容をほぼ正しく実現している場合，90点を原点として，60～100点で評価する．
    - 加点要因
        - コメントやインデンテーションが適切で，読みやすさに十分な配慮がなされている．
        - 利用者に便利なように，ユーザーインターフェースが工夫されている．
        - 不適切な入力に対しても，なんらかの適切なエラー処理が行われる．
        - 課題の指示内容を含んで，さらに高度な機能が実現されている

        など．

    - 減点要因
        - インデンテーションが不適切で読みづらい．
        - 変数や関数の名前が不適切で読みづらい．
        - 条件によって，正しく動作したりしなかったりする．
        - コードに無意味な部分や冗長な部分がある．
        - 非効率なコードになっている．

        など．

- 課題の指示内容が正しく実現されていない場合，内容に応じて 0～59 点で採点する．
- 締切を過ぎた課題は原則として受け取らない．

## オプション課題の取り扱い

- オプション課題の得点は，通常の課題の点数に加算される．

## 注意

- 課題は必ず自力で行うこと．分からなければ質問に来ること．
- インターネット等から写ししたと思われるものは不正とみなす．
- 自力で行ったかどうか疑わしいものは採点を保留する．
  自力で行ったのに採点を保留された場合は申し出ること．
  その際には，プログラムの内容について口頭で尋ねる．
  
<script>
let lm = new Date(document.lastModified).toLocaleString();
let pe = document.body.firstElementChild;
let elm = document.createElement("div");
elm.style.textAlign = "right";
elm.innerHTML = `Last Modified: ${lm}`;
pe.insertBefore(elm, pe.firstChild);
</script>