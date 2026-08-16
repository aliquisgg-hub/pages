import math

while True:
    x = float(input("? "))
    if x == 0:
        break
    elif x > 0:
        print(math.sqrt(x))
    else:
        print("0 +", math.sqrt(-x), "i")