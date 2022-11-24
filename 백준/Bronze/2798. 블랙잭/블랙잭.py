import sys

n, m = map(int, sys.stdin.readline().split())
arr = list(map(int, sys.stdin.readline().split()))
result = 0

for i in range(len(arr)-2):
    for j in range(i+1, len(arr)-1):
        for k in range(j+1, len(arr)):
            sumAll = arr[i] + arr[j] + arr[k]
            if sumAll <= m:
                result = max(result, sumAll)

print(result)
