rem = '''
pythonw %0
goto EOF
'''
import matplotlib.pyplot as plt     # matplotlib ライブラリの pyplot モジュールを plt という名で読み込む

x_values = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June']  # 横軸のデータ（リスト）を変数 x_values に代入
y_values = [100, 130, 80, 150, 140, 130]                # 縦軸のデータ（リスト）を変数 y_values に代入

plt.bar(x_values, y_values)     # 棒グラフを構成して...
plt.show()                      # 構成したグラフを表示する

'''
:EOF exit
'''