function solution(food) {
    let answer = '';
    const arr = [];
    for(let i=1; i<food.length; i++) {
        const cal = food[i] % 2 === 0 ? food[i] / 2 : Math.floor(food[i] / 2);
        answer += `${i}`.repeat(cal);
    }
    
    return answer+'0'+[...answer].reverse().join("");
}