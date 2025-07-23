function solution(storey) {
    let answer = 0;
    storey = (storey+"").split("").map(Number);
    let len = storey.length-1;
    
    while(len >= 0) {
        if(storey[len] < 5) {
            answer += storey[len];
        }else if(storey[len] > 5) {         
            if(len === 0) {
                answer += (11 - storey[len]);
            }
            else {
                answer += (10 - storey[len]);    
                storey[len-1] += 1;
            }
        }else if(storey[len] === 5) {
            if(storey[len-1]+1 > 5) {
                answer += 5
                storey[len-1] += 1;
            }
            else answer += 5;
        }
        len--;
    }
    
    return answer;
}