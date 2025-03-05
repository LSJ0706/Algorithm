function solution(fees, records) {
    const parking = {};
    records.forEach((record) => {
        const [time, carNum, enter] = record.split(" ");
        const [hh, mm] = time.split(":").map(Number);
        const minutes = hh*60 + mm;
        
        if(!parking[carNum]) {
            parking[carNum] = {time:0, carNum};
        }
        
        parking[carNum].enter = enter;
        
        if(enter === "IN") {
            parking[carNum].inTime = minutes;
            return;
        }
        parking[carNum].time += minutes - parking[carNum].inTime;
    });
    
    const answer = Object.values(parking).sort((a,b) => a.carNum - b.carNum).map((v) => {
        if(v.enter === "IN") v.time += 1439 - v.inTime;
        if(fees[0] > v.time) return fees[1];
        return fees[1] + Math.ceil((v.time - fees[0])/fees[2]) * fees[3];
    })
    return answer;
}