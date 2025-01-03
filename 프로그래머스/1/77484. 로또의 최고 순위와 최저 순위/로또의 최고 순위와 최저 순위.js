function solution(lottos, win_nums) {
    const answer = [];
    const rate = {
        6 : 1,
        5 : 2,
        4 : 3,
        3 : 4,
        2 : 5,
        1 : 6,
        0 : 6
    }
    const winning = win_nums.filter(v => lottos.includes(v));
    return [rate[winning.length + lottos.filter(v => v === 0).length], rate[winning.length]];
}