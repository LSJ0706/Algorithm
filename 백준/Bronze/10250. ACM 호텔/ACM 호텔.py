t = int(input())

for i in range(t):
    h, w, n = map(int, input().split())
    r1 = n%h
    r2= n//h + 1
    
    if r1 == 0 :
        r1=h
        r2=n//h
        print(r1*100+r2)
    else:
        print(r1*100+r2)
