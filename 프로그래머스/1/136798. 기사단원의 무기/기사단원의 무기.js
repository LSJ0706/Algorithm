function solution(number, limit, power) {
    let answer = 0;
    for(let i=1; i<=number; i++) {
        const measure = [];
        for(let j=1; j<=Math.sqrt(i); j++) {
            if(i % j === 0) {
                if(i / j !== j) {
                    measure.push(j);
                    measure.push(i/j);
                }else {
                    measure.push(j);
                }
            } 
        }
        if(measure.length <= limit) answer += measure.length;
        else answer += power;
    }
    return answer;
}