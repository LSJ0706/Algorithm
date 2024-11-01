function solution(n, lost, reserve) {
    let answer = 0;
    const arrLost = lost.filter((v) => !reserve.includes(v)).sort((a,b) => a-b);
    const arrReserve = reserve.filter((v) => !lost.includes(v)).sort((a,b) => a-b);
    arrLost.forEach((v) => {
        if (arrReserve.includes(v+1) || arrReserve.includes(v-1)) {
            answer++
            arrReserve.shift();
        }
    })
    
    
    return answer + n - arrLost.length;
}