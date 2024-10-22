function solution(n) {
    const arr = [];
    for(let i=1; i<=Math.sqrt(n); i++) {
        if(n%i === 0){
            arr.push(i)
            if(n/i != i) {
                arr.push(n/i)
            }
        }
    }
    let answer = arr.reduce((acc,cur) => acc + cur, 0);
    return answer;
}