function solution(fees, records) {
    const answer = [];
    const carObj = {};
    records.forEach((record) => {
        const [time, carNum, exit] = record.split(" ");
        const [mm,ss] = time.split(":").map(Number);
        const minutes = mm*60 + ss;
        
        if(carObj[carNum] === undefined) carObj[carNum] = [undefined, 0];
        if(exit === "IN") {
            carObj[carNum][0] = exit;
            carObj[carNum][1] -= minutes;
        }else if(exit === "OUT") {
            carObj[carNum][0] = exit;
            carObj[carNum][1] += minutes;
        }
    });
    const calFees = Object.entries(carObj).sort((a,b) =>a[0] - b[0]).forEach((v) => {
        if(v[1][0] === "IN") v[1][1] += 1439
        if(fees[0] >= v[1][1]) answer.push(fees[1])
        else answer.push(fees[1] + Math.ceil((v[1][1]-fees[0])/fees[2])*fees[3])
    });
    return answer;
}