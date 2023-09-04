function solution(ingredient) {
    var answer = 0;
    var stack = [];
    for(i of ingredient) {
        stack.push(i)
        if(stack.slice(-4).join("") == 1231) {
            stack.pop()
            stack.pop()
            stack.pop()
            stack.pop()
            answer ++
        }
    }
    return answer;
}