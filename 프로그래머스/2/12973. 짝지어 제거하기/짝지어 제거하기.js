function solution(s) {
    const answer = 1;
    const stack = [];
    for(let i=0; i<s.length; i++) {
        if(stack.at(-1) === s[i]) {
            stack.pop();
        }else {
            stack.push(s[i]);
        }
    }
    return stack.length === 0 ? answer : 0;
}