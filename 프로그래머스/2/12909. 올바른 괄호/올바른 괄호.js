function solution(s){
    const stack = [];
    s.split("").forEach((v) => {
        stack.push(v);
        if(stack.at(-2) + stack.at(-1) === "()") {
            stack.pop();
            stack.pop();
        }
    });
    
    return stack.length === 0 ? true : false;
}