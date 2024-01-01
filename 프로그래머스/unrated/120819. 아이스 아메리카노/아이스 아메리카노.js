function solution(money) {
    const answer = [];
    const price = 5500;
    let count = 0
    while(money >= price) {
        money -= price;
        count ++
    }
    answer.push(count)
    answer.push(money)
    return answer;
}