function solution(lottos, win_nums) {
    const answer = [];
    const rate = [[1,6],[2,5],[3,4],[4,3],[5,2],[6,1],[6,0]];
    const zero = lottos.filter((v) => v === 0).length;
    const right = win_nums.filter((v) => lottos.includes(v)).length;
    rate.forEach((v) => {
        if(v[1] == (right+zero)) answer.push(v[0])
        if(v[1] == right) answer.push(v[0])
    })
    return answer;
}