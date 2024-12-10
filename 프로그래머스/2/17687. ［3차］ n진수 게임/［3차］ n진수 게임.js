function solution(n, t, m, p) {
    let answer = '';
    let cnt = 0;
    let number = 0;
    
    while(answer.length < t) {
        let binary = number.toString(n);
        for(let i=0; i<binary.length; i++) {
            if((cnt%m) + 1 === p && answer.length < t) {
                answer += binary[i].toUpperCase();
            }
            cnt++;
        }
        number++;
    }
    
    return answer;
}