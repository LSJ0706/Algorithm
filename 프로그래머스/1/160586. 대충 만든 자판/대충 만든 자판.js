function solution(keymap, targets) {
    const answer = [];
    targets.forEach((v) => {
        let cnt = 0;
        [...v].forEach((el) => {
            const arr = [];
            keymap.forEach((x) => {
                if(x.includes(el)) {
                    arr.push(x.indexOf(el));
                }
            })
            cnt += (Math.min(...arr)+1);
        })
        cnt === Infinity ? answer.push(-1) : answer.push(cnt);
    })
    return answer;
}