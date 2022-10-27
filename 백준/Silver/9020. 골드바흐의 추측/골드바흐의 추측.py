def isPrime(x):
    for i in range(2, int(x**0.5)+1):
        if x % i == 0:
            return False
    if x == 1:
        return False
    return True

t = int(input())

for i in range(t):
    n = int(input())
    for j in range(n//2 , 0, -1):
        if isPrime(j) and isPrime(n-j):
            print(j, n-j)
            break
