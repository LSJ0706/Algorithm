function solution(d, budget) {
    let answer = 0;
    d = d.sort((a,b) => a-b);
    for(let i=0; i<d.length; i++) {
        if(budget >= d[i]) {
            answer++
            budget -= d[i]
        }
    }
    return answer;
}