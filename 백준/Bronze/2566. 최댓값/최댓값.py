def solution(x, y):
    Max = -1
    col = row = 0
    for i in range(x):
        a.append(list(map(int, input().split())))
    for i in range(x):
        for j in range(y):
            if a[i][j] > Max:
                Max = a[i][j]
                row = i + 1
                col = j + 1
    print(Max)
    print(row, col)


a = []
solution(9, 9)
