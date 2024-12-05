function solution(want, number, discount) {
    let answer = 0;
    let len = number.reduce((acc,cur) => acc += cur);
    for(let i=0; i<discount.length-len+1; i++) {
        let sales = discount.slice(i,i+len);
        let ok = true;
        for(let j=0; j<want.length; j++) {
            if (number[j] !== sales.filter(v => v === want[j]).length) ok = false;
        }
        if(ok) answer++;
    }
    return answer;
}