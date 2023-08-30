function solution(arr, k) {
    var answer = [];
       arr.forEach(e => {
        if(!answer.includes(e)) {
            answer.push(e)
        }
    });
    answer = answer.slice(0,k)
    
    while(k>answer.length) {
        answer.push(-1)
    }
    return answer;
}