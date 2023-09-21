function solution(number, limit, power) {
    var divisor = [];
    for (let a=1; a<=number; a++) {
        var arr = [];
        for(let i=1; i<=Math.sqrt(a); i++) {
            if(a%i === 0) {
                arr.push(i)
                if(a/i !== i) {
                arr.push(a/i)
            }
            }
        }
        divisor.push(arr.length)
    }
    var answer = divisor.reduce((acc,cur) => {
        if(cur > limit) {
            cur = power
        }
        return acc + cur
    })
    return answer;
}