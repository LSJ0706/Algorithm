function solution(s) {
    var stack = [];
    var answer = [];
    
    [...s].forEach((v) => {
        if(!stack.includes(v)) {
            answer.push(-1)
        }if (stack.includes(v)){
            answer.push(stack.length - stack.lastIndexOf(v))
        }
        console.log(v)
        stack.push(v)
    })
    return answer;
}