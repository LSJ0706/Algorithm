rem = []

for i in range(10):
    A = int(input())
    rem.append(A%42)

rem = set(rem)
print(len(rem))
