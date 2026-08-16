# Code 2: （.show() 付き）

import io
import requests
from PIL import Image

response = requests.get("https://www.python.jp/logo.png")
Image.open(io.BytesIO(response.content)).show()
# Windows のフォトビューアが立ち上がって表示される