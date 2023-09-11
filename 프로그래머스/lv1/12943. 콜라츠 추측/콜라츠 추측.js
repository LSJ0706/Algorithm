function solution(num) {
    var answer = 0;
    if(num === 1) {
        return 0
    }
    while(true) {
        if(num%2 === 0) {
            num = num/2
        }else {
            num = 3*num + 1
        }
        answer ++
        if(num === 1) {
            break;
        }
    }
    return answer<500 ? answer : -1;
}