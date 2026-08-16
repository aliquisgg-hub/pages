import random

i = 0
while i < 10:

    a = random.randint(1, 10)
    b = random.randint(1, 10)
    sol = a + b

    prb = str(a) + " + " + str(b)
    ans = input(prb + " = ? ")

    if int(ans) == sol:
        print("正解です")

    else:
        print("違います")

    i = i + 1