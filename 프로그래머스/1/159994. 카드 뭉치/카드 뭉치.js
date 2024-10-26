function solution(cards1, cards2, goal) {
    let answer = 'Yes';
    goal.forEach((v) => {
        cards1.indexOf(v) == 0 ? cards1.shift() : cards2.indexOf(v) == 0 ? cards2.shift() : answer= 'No'
    })
    return answer;
}