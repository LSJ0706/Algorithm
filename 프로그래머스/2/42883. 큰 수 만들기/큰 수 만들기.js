function solution(number, k) {
    const answer = [];
    const numbers = number.split("").map(Number);
    for(let i=0; i<numbers.length; i++) {
        while(answer.length && answer.at(-1) < numbers[i]) {
            if(k === 0) break;
            answer.pop();
            k--;
        }
        answer.push(numbers[i]);
    }
    answer.splice(answer.length-k,k);
    return answer.join("");
}