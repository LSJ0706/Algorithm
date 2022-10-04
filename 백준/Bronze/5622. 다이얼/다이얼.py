Dial = ['ABC','DEF','GHI','JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ']
num = input()
time = 0

for i in range(len(num)):
    for j in Dial:
        if num[i] in j:
            time += (Dial.index(j) + 3)
print(time)
