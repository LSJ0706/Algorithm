import sys
m, n = map(int, sys.stdin.readline().split())

prime = [True] * (n+1)
prime[0] = False
prime[1] = False

for i in range(2, int(n**0.5)+1):
    if prime[i]:
        for j in range(i*2, n+1, i):
            prime[j] = False

for i in range(m, n+1):
    if prime[i]:
        print(i)
