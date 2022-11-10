list = []
average = 0
for i in range(5):
    n = int(input())
    list.append(n)
    average += int(list[i]/5)
list.sort()
print(average, list[2])
