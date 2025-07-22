function solution(number, k) {
    const answer = [];
    
    for(let i=0; i<number.length; i++) {
        const num = number[i];
        while(k > 0 && answer.at(-1) < num) {
            answer.pop();
            k--;
        }
        answer.push(num);
    }
    answer.splice(number.length-k,k);
    return answer.join("");
}