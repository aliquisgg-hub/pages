import random

i = 0
while i < 10:

    a = random.randint(1, 10)
    b = random.randint(1, 10)
    sol = a + b

    prb = str(a) + " + " + str(b)
    ans = input(prb + " = ? ")

    if int(ans) == sol:
        print(prb, "=", ans, "正解です", flush=True)

    else:
        print(prb, "=", ans, "違います", flush=True)

    i = i + 1