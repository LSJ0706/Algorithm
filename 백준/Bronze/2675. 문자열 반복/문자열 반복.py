T = int(input())

for i in range(T):
    R, S = input().split()
    R = int(R)
    for j in S:
        print(R*j, end="")
    print()
