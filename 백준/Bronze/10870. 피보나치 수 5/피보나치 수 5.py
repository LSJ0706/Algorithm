def Fibonacci(n):
    if n == 0:
        num = 0
        return num
    elif n <= 2:
        num = 1
        return num
    else:
        num = Fibonacci(n-2) + Fibonacci(n-1)
        return num

n = int(input())
print(Fibonacci(n))