function solution(k, score) {
    var stack = [];
    var answer = [];
    score.map((x) => {
        stack.push(x)
        if(stack.length > k ) {
            stack.sort((a,b) => b-a).splice(k,1)
        }
        answer.push(stack.sort((a,b) => b-a).at(-1))
    })
    
    return answer;
}