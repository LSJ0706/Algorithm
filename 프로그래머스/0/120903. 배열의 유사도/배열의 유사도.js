function solution(s1, s2) {
    let answer = 0;
    s1.forEach((v) => {
        if(s2.includes(v)) answer++;
    })
    return answer;
}