function solution(n, left, right) {
    let answer = [];
    for(let i=left; i<=right; i++) {
        const x = parseInt(i/n);
        const y = i%n
        answer.push(Math.max(x,y)+1) 
    }
    return answer;
}