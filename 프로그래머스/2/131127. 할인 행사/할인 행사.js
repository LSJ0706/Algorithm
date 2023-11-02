function solution(want, number, discount) {
    var answer = 0;
    var map = want.reduce((acc, cur, idx) => {
        acc.set(cur, number[idx])
        return acc
    },new Map())
    console.log(map)
    for(let i=0; i<=discount.length-10; i++) {
        var temp = new Map(map.entries())
        discount.slice(i,i+10).forEach((e) => {
            temp.set(e, temp.get(e) - 1)
        })
        if(Math.max(...[...temp.values()]) == 0) answer++
    }
    return answer;
}