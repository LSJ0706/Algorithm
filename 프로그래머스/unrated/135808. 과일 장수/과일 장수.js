function solution(k, m, score) {
    var answer = 0;
    score.sort((a,b) => a-b)
    if(score.length % m === 0) {
        for(let i=0; i<score.length; i+=m) {
            answer += score[i] * m
        }
    }else {
        score.splice(0,score.length % m)
        for(let i=0; i<score.length; i+=m) {
            answer += score[i] * m
        }
    }
    return answer;
}