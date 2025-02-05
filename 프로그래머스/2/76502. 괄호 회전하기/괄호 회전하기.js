function solution(s) {
    let answer = 0;
    let str = s;

    for(let i=0; i<str.length; i++) {
        const stack = [];
        str = str.slice(1,str.length) + str[0];
        str.split("").forEach((v) => {
            stack.push(v);
            if(stack.slice(-2).join("") === "[]" ||
               stack.slice(-2).join("") === "{}" ||
               stack.slice(-2).join("") === "()"
              ) {
                stack.pop();
                stack.pop();
            }
        })
        if(stack.length === 0) answer++;
    }
    return answer;
}