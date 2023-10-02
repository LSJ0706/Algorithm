function solution(A, B) {
    if(A===B) {
        return 0;
    }
    var answer = -1
    for(let i=1; i<A.length; i++) {
        var end = A.slice(-i);
        var remain = A.slice(0,A.length-i);
        if(end.concat(remain) === B) {
            answer = i
            break;
        }
    }
    return answer
}