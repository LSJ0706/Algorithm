function solution(topping) {
    let answer = 0;
    let top = 0;
    const a = new Set();
    const b = topping.reduce((acc, cur) => {
        if(acc[cur] === undefined) {
            acc[cur] = 1;
            top++;
        }
        else acc[cur] = acc[cur]+1;
        return acc;
    },{});
    
    for(let i=0; i<topping.length; i++) {
        a.add(topping[i]);
        b[topping[i]] = b[topping[i]]-1;
        if(b[topping[i]] === 0) top--;
        if(top === a.size) answer++;
    }
    return answer;
}