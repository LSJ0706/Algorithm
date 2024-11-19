function solution(s){
    let answer = true;
    const stack = [];
    s.split("").forEach((v) => {
        stack.push(v);
        if(stack.at(-2) + stack.at(-1) == "()") {
            stack.pop();
            stack.pop();
        }
    })
    return stack.length != 0 ? !answer : answer;
}