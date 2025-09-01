function solution(storey) {
    let answer = 0;
    const storeyArr = (storey + "").split("").reverse().map(Number);
    
    for(let i=0; i<storeyArr.length; i++) {
        if(storeyArr[i] > 5) {
            if(i === storeyArr.length - 1) answer += (11 - storeyArr[i]);
            else answer += (10 - storeyArr[i]);
            storeyArr[i+1]++;
        }else if(storeyArr[i] < 5) {
            answer += storeyArr[i];
        }else if(storeyArr[i] === 5){
            answer += 5;
            if(storeyArr[i+1] >= 5) {
                storeyArr[i+1]++;
            }
        }
    }
    return answer;
}