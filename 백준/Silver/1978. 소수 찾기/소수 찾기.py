n = int(input())
num = list(map(int, input().split()))

cnt = 0
for i in num:
    prime = True
    if i == 1:
        cnt -=1
    
    for j in range(2,i):
        if i%j == 0:
            prime = False
    if prime:
        cnt+=1
print(cnt)
        
