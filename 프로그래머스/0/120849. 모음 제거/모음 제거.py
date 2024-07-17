def solution(my_string):
    gather = ['a', 'e', 'i', 'o', 'u']
    for alpha in gather :
        my_string = my_string.replace(alpha, "")
    return my_string