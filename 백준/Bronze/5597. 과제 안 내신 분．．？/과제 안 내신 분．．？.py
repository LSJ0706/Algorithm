num = []
answer=list(range(1, 31))

for i in range(28):
    m = int(input())
    num.append(m)
answer = list(set(answer) - set(num))
answer.sort()
for j in range(2):
    print(answer[j])
