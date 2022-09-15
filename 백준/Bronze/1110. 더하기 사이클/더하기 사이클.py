N = int(input())
res = N
i = 0

while True:
    if res<10:
        res*10
    A = res // 10
    B = res % 10
    C = A+B
    res = (B*10) + C%10
    i+=1
    if res == N :
        break
print(i)
