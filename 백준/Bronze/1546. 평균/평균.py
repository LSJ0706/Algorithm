N = int(input())
score = list(map(float, input().split()))
avg = []


for i in range(N):
    ns = (score[i]/max(score))*100
    avg.append(ns)
print(sum(avg)/len(avg))
