function solution(fees, records) {
    const parkingTime = {};
    records.forEach(r => {
        let [time, id, type] = r.split(' ');
        let [h, m] = time.split(':');
        time = (h * 1) * 60 + (m * 1);
        if (!parkingTime[id]) parkingTime[id] = 0;
        if (type === 'IN') parkingTime[id] += (1439 - time);
        if (type === 'OUT') parkingTime[id] -= (1439 - time);
    });
    const answer = [];
    for (let [car, time] of Object.entries(parkingTime)) {
        if (time <= fees[0]) time = fees[1];
        else time = Math.ceil((time - fees[0]) / fees[2]) * fees[3] + fees[1]
        answer.push([car, time]);
    }
    return answer.sort((a, b) => a[0] - b[0]).map(v => v[1]);
}