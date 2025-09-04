function solution(weights) {
    let answer = 0;
    const balances = [1, 3/2, 4/3, 2];
    const obj = {};
    weights.sort((a,b) => b-a);
    
    for(let i=0; i<weights.length; i++) {
        balances.forEach((balance) => {
            const weight = weights[i] * balance;
            if(obj[weight]) answer += obj[weight];
            obj[weights[i]] = (obj[weights[i]] || 0) + 1;
        })
    }
    return answer/4;
}