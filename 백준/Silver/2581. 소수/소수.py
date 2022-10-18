m = int(input())
n = int(input())

primeNum = []

for i in range(m, n+1):
    prime = True
    if i != 1:
        for j in range(2, i):
            if i%j == 0:
                prime = False
        if prime:
            primeNum.append(i)
if len(primeNum) != 0:
    print(sum(primeNum))
    print(min(primeNum))
else:
    print(-1)
