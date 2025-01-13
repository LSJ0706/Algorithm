function solution(today, terms, privacies) {
    const answer = [];
    today = today.split(".").map((v) => Math.floor(v));
    terms = terms.reduce((acc,cur) => {
        const [type, period] = cur.split(" ");
        acc[type] = Math.floor(period);
        return acc;
    },{});
    
    privacies.forEach((v,idx) => {
        const [date, type] = v.split(" ");
        let [year, month, day] = date.split(".").map((v) => Math.floor(v));
        month += terms[type];
        if(day - 1 === 0) {
            day = 28;
            month--;
        }else {
            day--;
        }
        const todayTime = today[0] * 12 * 28 + today[1] * 28 + today[2];
        const periodTime = year * 12 * 28 + month * 28 + day;
        if(todayTime > periodTime) answer.push(idx+1);
        
    })
    return answer;
}