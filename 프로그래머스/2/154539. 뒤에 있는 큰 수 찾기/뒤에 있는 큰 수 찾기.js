function solution(numbers) {
    const answer = new Array(numbers.length).fill(-1);
    const stack = [];
    for(let i=0; i<numbers.length; i++) {
        while(stack.length && numbers[stack.at(-1)] < numbers[i]) {
                answer[stack.at(-1)] = numbers[i];
                stack.pop();
        }
        stack.push(i);
    }
    return answer;
}