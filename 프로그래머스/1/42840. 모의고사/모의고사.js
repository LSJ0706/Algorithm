function solution(answers) {
    const answer = [];
    const scoreBoard = [];
    const mathGiveUp = [[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]];
    mathGiveUp.forEach((v) => {
        let score = 0;
        answers.forEach((e,i) => {
            if(v[i%v.length] === e) score++;
        })
        scoreBoard.push(score);
    })
    scoreBoard.forEach((v,i) => { 
        if(v === Math.max(...scoreBoard)) { 
            answer.push(i+1)
        }
    })
    
    return answer;
}