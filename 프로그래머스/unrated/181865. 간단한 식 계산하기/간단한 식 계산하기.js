function solution(binomial) {
    var [x, op, y] = binomial.split(" ")

    switch(op) {
        case "+" :
            return Number(x)+Number(y);
        case "*" :
            return x*y;
        default :
            return x-y;
    }
}