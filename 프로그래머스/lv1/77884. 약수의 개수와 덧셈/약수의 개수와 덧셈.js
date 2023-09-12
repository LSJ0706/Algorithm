function solution(left, right) {
    var answer = [];
    for(let i=left; i<=right; i++) {
        var arr = [];
        for(let j=1; j<=Math.sqrt(i); j++){
            if(i%j === 0) {
                arr.push(j)
                if(i/j !== j){
                    arr.push(i/j)
                }
            }
        }
        arr.length%2 === 0 ? answer.push(i) : answer.push(-i);
    }
    return answer.reduce((acc,cur) => acc + cur);
}