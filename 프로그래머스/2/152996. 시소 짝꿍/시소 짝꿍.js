function solution(weights) {
    let answer = 0;
    const rates = [1, 3/2, 4/3, 2];
    const objects = {}
    weights.sort((a,b) => b - a);
    for(let i=0; i<weights.length; i++) {
        rates.forEach((rate) => {
            const num = weights[i] * rate;
            if(objects[num]) answer += objects[num];
            objects[weights[i]] = (objects[weights[i]] || 0) + 1;
        })
    }
    return answer/4;
}