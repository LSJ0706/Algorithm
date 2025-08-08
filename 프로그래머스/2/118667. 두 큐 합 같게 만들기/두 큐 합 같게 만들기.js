function solution(queue1, queue2) {
    let answer = 0;
    const len = queue1.length + queue2.length;
    let sum1 = queue1.reduce((acc, cur) => acc + cur, 0);
    let sum2 = queue2.reduce((acc, cur) => acc + cur, 0);
    let [idx1, idx2] = [0, 0];
    while(sum1 !== sum2) {
        if(sum1 > sum2) {
            sum1 -= queue1[idx1];
            sum2 += queue1[idx1];
            queue2.push(queue1[idx1]);
            idx1++;
        }else if(sum1 < sum2){
            sum2 -= queue2[idx2];
            sum1 += queue2[idx2];
            queue1.push(queue2[idx2]);
            idx2++;
        }
        if(answer > 3 * len) {
            return -1;
        }
        answer++;
    }
    
    return answer;
}