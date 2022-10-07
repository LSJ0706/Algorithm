N = int(input())
allNum = 1
cnt = 1

while(N > allNum):
    allNum += 6 * cnt
    cnt += 1
print(cnt)
