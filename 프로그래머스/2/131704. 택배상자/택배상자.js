function solution(order) {
    let answer = 0;
    let idx = 0;
    const stack = [];
    for(let i = 1; i <= order.length; i++) {
        if(order[idx] == i) {
            idx++;
            answer++;
        }else {
            stack.push(i)
        }
        while(stack.length != 0 && stack.at(-1) == order[idx]) {
            stack.pop();
            idx++
            answer++
        }
    }
    return answer;
}