function solution(n, left, right) {
    const answer = [];
    for(let i=left; i<=right; i++) {
        answer.push(Math.max(i%n, (parseInt(i/n))) + 1)
    }
    return answer;
}