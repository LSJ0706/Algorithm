function solution(s) {
    let answer = 0;
    let first = "";
    let other = "";
    [...s].forEach((v,idx) => {
        if(first === "" || first[0] === v) first += v;
        else other += v;
        
        if(first.length === other.length) {
            first = "";
            other = "";
            answer ++;
        } else if(idx+1 === s.length) {
            answer++;
        }
    })
    return answer;
}