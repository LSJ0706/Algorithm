function solution(n) {
    let answer = "수";
    for(let i=2; i<=n; i++) {
        if(i%2 === 0) answer += "박"
        else answer += "수"
    }
    return answer;
}