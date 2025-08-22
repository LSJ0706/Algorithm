function solution(numbers) {
    const answer = new Array(numbers.length).fill(-1);
    const stack = [];
    
    numbers.forEach((number, idx) => {
        while(stack.length && numbers[stack.at(-1)] < number) {
            const i = stack.pop();
            answer[i] = number;
        }
        stack.push(idx);
    });
    
    return answer;
}