def factorial(n):
    if n != 0:
        return n * factorial(n-1)
    else:
        return(1)  
    factorial(n)
    

n = int(input())
print(factorial(n))
