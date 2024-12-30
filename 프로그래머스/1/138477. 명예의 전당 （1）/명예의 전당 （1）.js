function solution(k, score) {
    const answer = [];
    const stack = [];
    score.forEach((v) => {
        if(stack.length < k) {
            stack.push(v);
            stack.sort((a,b) => a-b);
        }else {
            stack.push(v);
            stack.sort((a,b) => a-b);
            stack.shift();
        }
        answer.push(stack[0]);
    })
    return answer;
}