function solution(n, lost, reserve) {
    var finalLost = lost.sort((a,b) => a-b).filter((x) => !reserve.includes(x))
    var finalReserve = reserve.sort((a,b) => a-b).filter((x) => !lost.includes(x))
    var answer = n-finalLost.length;
    
    finalLost.forEach((e) => {
        if(finalReserve.length === 0) {
            return;
        }
        if(finalReserve.includes(e-1)) {
            finalReserve = finalReserve.filter((x)=> x !== e-1)
            answer ++
        }else if(finalReserve.includes(e+1)) {
            finalReserve = finalReserve.filter((x)=> x !== e+1)
            answer ++
        }
    })
    return answer;
}