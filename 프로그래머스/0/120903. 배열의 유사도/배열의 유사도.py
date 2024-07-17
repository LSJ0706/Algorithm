def solution(s1, s2):
    answer = 0
    if len(s1) > len(s2):
        for e in s2 :
            if e in s1 :
                answer += 1
    else:
        for e in s1 :
            if e in s2 :
                answer += 1
        
    return answer