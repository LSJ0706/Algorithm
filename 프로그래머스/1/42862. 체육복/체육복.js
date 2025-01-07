function solution(n, lost, reserve) {
    let answer = 0;
    const newReserve = reserve.sort((a,b) => a-b).filter(v => !lost.includes(v));
    let newLost = lost.sort((a,b) => a-b).filter(v => !reserve.includes(v));
    answer = n - newLost.length;
    for(let i=0; i<newReserve.length; i++) {
        if(newLost.includes(newReserve[i]-1)) {
            newLost = newLost.filter(v => v !== newReserve[i]-1);
            answer++;
        }else if(newLost.includes(newReserve[i]+1)) {
            newLost = newLost.filter(v => v !== newReserve[i]+1);
            answer++;
        }else if(newReserve.length === 0) {
            break;
        }
    }
    return answer;
}