import random

def makeProb():
    x = random.randint(1, 10)
    y = random.randint(1, 10)
    sol = x + y
    return ("+", x, y, sol)

def askProb(prob):
    op, x, y, sol = prob
    ans = int(input(f"{x} {op} {y} = ? "))
    return (ans, ans==sol)

def showResult(prob, result):
    op, x, y, sol = prob
    ans, judge = result
    if judge:
        print(f"問題：{x} {op} {y}，解答：{ans} ― ○")
    else:
        print(f"問題：{x} {op} {y}，解答：{ans} ― ×，正解は{sol}です．")

def makeProbList(n):
    probList = []
    while len(probList) < n:
        prob = makeProb()
        probList.append(prob)
    return probList

def askProbList(probList):
    probResultList =[]
    for prob in probList:
        result = askProb(prob)
        probResultList.append((prob, result))
    return probResultList

def showResultList(ProbResultList):
    for probResult in ProbResultList:
        prob, result = probResult
        showResult(prob, result)

# 足し算問題を(1問)作成し，出題して解答を受け取り，正誤判定の結果を表示するという一連のプロセスをN回反復するプログラム
N = 3
for _ in range(N):
    prob = makeProb()
    result = askProb(prob)
    showResult(prob, result)
