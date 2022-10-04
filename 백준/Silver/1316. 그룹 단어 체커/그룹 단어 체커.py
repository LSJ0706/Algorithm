N = int(input())
check = N

for i in range(N):
    str = input()
    for j in range(len(str) - 1):
        if str[j] == str[j+1]:
            pass
        elif str[j] in str[j+1 :]:
            check-=1
            break
            
print(check)  
