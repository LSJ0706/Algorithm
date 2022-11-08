
def solution(babbling):
    word = ["aya", "ye", "woo", "ma"]
    answer = 0
    for i in range(len(babbling)):
        for j in range(len(word)):
            if word[j] + word[j] in babbling[i]:
                continue
            if word[j] in babbling[i]:
                babbling [i] = babbling[i].replace(word[j], '*')
                answer = babbling.count('*') + babbling.count('*'*2) + babbling.count('*'*3) + babbling.count('*'*4)
    return answer