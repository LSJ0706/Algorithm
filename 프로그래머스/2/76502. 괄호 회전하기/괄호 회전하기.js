function solution(s) {
    var answer = 0;
    for(let i=0; i<s.length; i++) {
        var stack = [];
        [...s].forEach((e) => {
            stack.push(e)
            if(stack.slice(-2).join("") == "[]" || 
               stack.slice(-2).join("") == "()" || 
               stack.slice(-2).join("") == "{}" ) {
                stack.pop()
                stack.pop()
            }
        })
        if(stack.length === 0) {
            answer++
        }
        s = s.slice(1,s.length) + s.slice(0,1)
    }
    return answer;
}