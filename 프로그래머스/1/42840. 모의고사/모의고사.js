function solution(answers) {
    const answer = [];
    const cnt = [0, 0, 0];
    const one = [1, 2, 3, 4, 5];
    const two = [2, 1, 2, 3, 2, 4, 2, 5];
    const three = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    answers.forEach((v, idx) => {
        if(v === one[idx % one.length]) cnt[0] ++;
        if(v === two[idx % two.length]) cnt[1] ++;
        if(v === three[idx % three.length]) cnt[2] ++;
    })
    const max = Math.max(...cnt);
    for(let i=0; i<cnt.length; i++) {
        if(cnt[i] === max) answer.push(i+1);
    }
    return answer;
}