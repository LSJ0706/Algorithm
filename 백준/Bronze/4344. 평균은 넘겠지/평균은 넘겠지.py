C = int(input())

for i in range(C):
    N = list(map(int,input().split()))
    avg = sum(N[1:])/N[0]
    count = 0
    for j in N[1:]:
        if j > avg:
            count += 1
    print(f"{count/N[0]*100 :.3f}%")
