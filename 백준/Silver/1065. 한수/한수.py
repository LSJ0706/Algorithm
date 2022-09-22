def arithmeticSq(X):
    ctn = 0
    for i in range (1, X+1):
        num_digit = list(map(int,str(i)))
        if(i<100):
            ctn+=1
        elif((num_digit[0] - num_digit[1] == num_digit[1] - num_digit[2])):
            ctn+=1
    return(ctn)
X = int(input())
print(arithmeticSq(X))