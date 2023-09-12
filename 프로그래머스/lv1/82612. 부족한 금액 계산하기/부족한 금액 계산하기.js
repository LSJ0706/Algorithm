function solution(price, money, count) {
    var answer = [];
    for(let i=1; i<=count; i++) {
        answer.push(price*i)
    }
    var need = answer.reduce((acc,cur) => acc + cur)
    return need <= money ? 0 : need - money;
}