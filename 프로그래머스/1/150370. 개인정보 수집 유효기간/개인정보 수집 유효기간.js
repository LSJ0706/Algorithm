function solution(today, terms, privacies) {
    const answer = [];
    today = today.split(".").map(v => parseInt(v));
    terms = terms.map((v) => v.split(" "));
    privacies.forEach((v,idx) => {
        let [day, type] = v.split(" ");
        terms.forEach((el) => {
            if(el[0] == type) {
                day = day.split(".").map(v => parseInt(v));
                day[1] += parseInt(el[1]);
                day[2]--;
                
                if(day[1] > 12) {
                    if(day[1]%12 === 0) {
                        day[0] += (day[1] / 12) - 1;
                        day[1] = 12;
                    }else {
                        day[0] += parseInt(day[1] / 12);
                        day[1] = day[1] % 12;
                    }
                }
                
                if(day[2] === 0) {
                    day[1]--;
                    day[2] = 28;
                    if(day[1] === 0) {
                        day[0]--;
                        day[1] = 12;
                    }
                }
            }
        })

        if(day[0] < today[0]) answer.push(idx+1);
        else if(day[0] == today[0] && day[1] < today[1]) answer.push(idx+1);
        else if(day[0] == today[0] && day[1] == today[1] && day[2] < today[2]) answer.push(idx+1);
    });
    
    return answer;
}