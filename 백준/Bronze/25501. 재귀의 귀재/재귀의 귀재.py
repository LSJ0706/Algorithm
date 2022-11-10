def recursion(s, l, r, cnt):
    cnt+=1
    if l >= r:
        return print(1, cnt)
    elif s[l] != s[r]:
        return print(0, cnt)
    else:
        return recursion(s, l+1, r-1, cnt)

        
def isPalindrome(s, cnt):
    return recursion(s, 0, len(s)-1, cnt)

T = int(input())
for i in range(T):
    cnt = 0
    S = input()
    isPalindrome(S, cnt)