function solution(queue1, queue2) {
    let answer = 0;
    
    let sum1 = Math.floor(queue1.reduce((acc,cur) => acc+cur));
    let sum2 = Math.floor(queue2.reduce((acc,cur) => acc+cur));
    const all = sum1 + sum2;
    
    const queue = [...queue1, ...queue2];
    
    const len = queue1.length;
    const maxLen = queue.length;
    
    let left = 0;
    let right = len;
    
    if (all % 2 !== 0) return -1;
    
    while(sum1 !== sum2) {
        if(sum1 > all/2) {
            const qNum = queue[left];
            sum1 -= qNum;
            sum2 += qNum;
            left++;
        }else {
            const qNum = queue[right];
            sum2 -= qNum;
            sum1 += qNum;
            right++;
        }
        answer++;
        if(answer >= maxLen * 3) return -1;
    }

    return answer;
}