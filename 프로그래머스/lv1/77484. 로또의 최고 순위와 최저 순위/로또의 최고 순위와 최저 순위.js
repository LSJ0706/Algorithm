function solution(lottos, win_nums) {
    var rank = new Map([
        [6, 1],
        [5, 2],
        [4, 3],
        [3, 4],
        [2, 5]
    ]);
    var answer = [];
    var count = 0;
    var poss = lottos.filter(e => e === 0).length;
    for(let i=0; i<win_nums.length; i++) {
        if (lottos.includes(win_nums[i])) count ++
    }
    
    answer.push(count+poss)
    answer.push(count)

    answer = answer.map((x) => {
        if(rank.get(x) !== undefined) {
            x = rank.get(x)
        }else {
            x = 6
        }
        return x
    })
    return answer;
}