X = int(input())
L = 0
num = 0

while X > num:
    L += 1
    num += L

D = num - X
if L % 2 == 0:
    up = L - D
    down = D + 1
else:
    up = D + 1
    down = L - D
print("%d/%d" % (up, down))