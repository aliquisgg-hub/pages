---
title: range() 関数と for 文
last_modified: 2022-07-19 17:58:57

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
# range() 関数と for 文

- 決まった回数の繰り返しには，range() 関数と for 文の組み合わせが便利である．

  例）
  ```python
  for i in range(5):
      print(i);
  ```
  を実行すると，
  ```
  0
  1
  2
  3
  4
  ```
  と表示される．これは，以下と（ほぼ）同じ．
  ```python
  for i in [0, 1, 2, 3, 4]:
      print(i);
  ```

- 同様に，
  ```python
  for i in range(1, 5):
  ```
  は，
  ```python
  for i in [1, 2, 3, 4]:
  ```
  と（ほぼ）同じで，
  ```python
  for i in range(0, 8, 2):
  ```
  は，
  ```python
  for i in [0, 2, 4, 6]:
  ```
  と（ほぼ）同じである．

- なお，range関数が返す値はリストではなく「数列」なので，リストとして用いたい場合は，list() 関数でリストに変換する．
  ```python
  list(range(1, 5))   # ⇒ [1, 2, 3, 4]
  ```
  同様に，tuple() 関数でタプルに変換することもできる．
  ```python
  tuple(range(1, 5))  # ⇒ (1, 2, 3, 4)
  ```

- 詳細は以下を参照のこと．
  - [range() 関数](https://docs.python.org/ja/3.8/tutorial/controlflow.html#the-range-function)
  - [range](https://docs.python.org/ja/3.8/library/stdtypes.html#ranges)