function solution(ingredient) {
    let answer = 0;
    const stack = [];
    ingredient.forEach((v) => {
        stack.push(v);
        if(stack.slice(stack.length-4, stack.length).join("") === "1231") {
            answer++;
            stack.splice(-4)
        }
    })
    return answer;
}