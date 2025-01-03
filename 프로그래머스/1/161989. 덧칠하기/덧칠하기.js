function solution(n, m, section) {
    let answer = 0;
    let cnt = 0;
    for(let i=0; i<section.length; i++) {
        if(cnt < section[i]) {
            cnt = section[i] + m -1;
            answer ++;
        };
    }
    return answer;
}