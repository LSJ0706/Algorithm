function solution(s){
    let answer = 0;
    s = [...s.toLowerCase()];
    
    s.forEach((x) => {
        if (x === "p") answer ++;
        else if (x === "y") answer--;
    })
    return answer === 0 ? true : false
}