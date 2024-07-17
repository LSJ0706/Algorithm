def solution(my_string):
    answer = ''
    for char in my_string:
        if char.isupper():
            answer += char.lower()
        else :
            answer += char.upper()
    return answer