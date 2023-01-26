S = input()
Supper = S.upper()
Supper_set = list(set(Supper))
cntList = []

for i in Supper_set:
    cnt = Supper.count(i)
    cntList.append(cnt)
    
if cntList.count(max(cntList)) >= 2:
    print("?")
else:
    print(Supper_set[(cntList.index(max(cntList)))])
