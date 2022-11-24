n = int(input())
result = 0

for i in range(1, n+1):
    num = list(map(int, str(i)))
    result = i + sum(num)
    if result == n:
        print(i)
        break
    elif i == n:
        print(0)