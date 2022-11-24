n = int(input())
w = []
for i in range(n):
    x, y = map(int, input().split())
    w.append((x, y))

for i in w:
    rank = 1
    for j in w:
        if i[0] < j[0] and i[1] < j[1]:
            rank += 1
    print(rank)
