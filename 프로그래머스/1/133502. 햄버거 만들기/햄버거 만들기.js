function solution(ingredient) {
    var answer = 0;
    const stack = [];
    ingredient.forEach((v) => {
        stack.push(v);
        if(JSON.stringify(stack.slice(-4)) == JSON.stringify([1,2,3,1])) {
            stack.pop();
            stack.pop();
            stack.pop();
            stack.pop();
            answer++
        }
    })
    return answer;
}