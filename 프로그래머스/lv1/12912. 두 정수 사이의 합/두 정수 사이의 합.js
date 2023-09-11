function solution(a, b) {
    var answer = 0;
    for(let i=0; i<Math.abs(a-b)+1; i++) {
        if(a>b) {
            answer += (b+i)
        }else {
            answer += (a+i)
        }
        
    }
    return answer;
}