arr = [[0 for j in range(101)] for i in range(101)]
cnt = 0

n = int(input())
for i in range(n):
    x, y = map(int, input().split())
    for row in range(x, x + 10):
        for col in range(y, y + 10):
            arr[row][col] = 1

for row in range(101):
    for col in range(101):
        if arr[row][col] == 1:
            cnt += 1
print(cnt)
