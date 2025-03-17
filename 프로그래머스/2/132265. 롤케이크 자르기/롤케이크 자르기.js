function solution(topping) {
    let answer = 0;
    const len = topping.length;
    const up = topping.reduce((acc, cur) => {
        acc.set(cur, (acc.get(cur) || 0)+1);
        return acc
    }, new Map());
    let upTopping = (new Set(topping)).size;
    const down = new Set();
    
    for(let i=0; i<len; i++) {
        const currentTopping = topping[i]
        down.add(currentTopping);
        up.set(currentTopping, (up.get(currentTopping)-1));
        if(!up.get(currentTopping)) upTopping--;
        if(down.size === upTopping) answer++;
    }
    return answer;
}