import sys

while True:
    n = int(sys.stdin.readline())
    if n == 0:
        break
    
    cnt = 0

    prime = [True] * (2*n+1)
    prime[0] = False
    if n !=0:
        prime[1] = False

    for i in range(2, int((2*n)**0.5)+1):
        if prime[i]:
            for j in range(i*2, 2*n+1, i):
                prime[j] = False

    for i in range(n+1, 2*n+1):
        if prime[i]:
            cnt+=1
    if n !=0:
        print(cnt)