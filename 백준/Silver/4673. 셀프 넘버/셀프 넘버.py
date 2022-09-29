selnum = list(range(1,10001))
num = []

for i in range(1,10001):
    for j in str(i):
        i += int(j)
    num.append(i)
        
ans = list(set(selnum) - set(num))
ans.sort()
for i in ans:
    print(i)

