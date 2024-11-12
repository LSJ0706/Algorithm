function solution(video_len, pos, op_start, op_end, commands) {
    video_len = changeSecond(video_len);
    pos = changeSecond(pos);
    op_start = changeSecond(op_start);
    op_end = changeSecond(op_end);
    
    commands.forEach((v) => {
        if(pos >=op_start && pos <= op_end) pos = op_end;
        if(v == "next") {
            let temp = pos + 10;
            
            if(temp > video_len) pos = video_len;
            else if(temp >=op_start && temp <= op_end) pos = op_end;
            else pos = temp;
        }else {
            let temp = pos - 10;
            
            if(temp < 0) pos = 0;
            else if(temp >=op_start && temp <= op_end) pos = op_end;
            else pos = temp;
        }
    })
    const [mm, ss] = [parseInt(pos/60), pos%60];
    const answer = `${mm}`.padStart(2,"0")+":"+`${ss}`.padStart(2,"0");
    return answer;
}

function changeSecond (string) {
    const seconds = string.split(":").map(Number).reduce((acc,cur,idx) => {
        if(idx === 0) acc += cur*60
        else acc += cur
        return acc;
    },0);
    return seconds;
}