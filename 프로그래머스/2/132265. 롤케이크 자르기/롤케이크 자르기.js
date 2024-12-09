function solution(topping) {
    let answer = 0;
    const up = new Map();
    const down = new Set();
    topping.forEach((v) => { up.set(v, (up.get(v) || 0) +1); });
    
    for(let i=0; i<topping.length; i++) {
        up.set(topping[i], up.get(topping[i])-1);
        if(up.get(topping[i]) === 0) up.delete(topping[i]);
        down.add(topping[i]);
        if(up.size === down.size) answer++;
    }
    return answer;
}