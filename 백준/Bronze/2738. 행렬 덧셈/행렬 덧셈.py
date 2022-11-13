def solution(x, y):
    for row in range(x):
        a.append(list(map(int, input().split())))
    for row in range(x):
        b.append(list(map(int, input().split())))
    for row in range(x):
        for col in range(y):
            print(a[row][col] + b[row][col], end=' ')
        print()


a = []
b = []
n, m = map(int, input().split())
solution(n, m)