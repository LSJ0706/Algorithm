function solution(topping) {
    let answer = 0;
    const front = new Map();
    const back = new Map();
    
    topping.forEach((top) => {
        front.set(top, (front.get(top) || 0) + 1);
    })
    
    for(let i=0; i<topping.length; i++) {
        back.set(topping[i], (back.get(topping[i]) || 0) + 1);
        if(front.get(topping[i]) > 1) {
            front.set(topping[i], front.get(topping[i]) - 1);
        }else {
            front.delete(topping[i]);
        }
        
        if(front.size === back.size) {
            answer++;
        }
    }
    return answer;
}