function solution(keymap, targets) {
    var answer = [];
    targets.forEach((v) => {
        let cnt = 0;
        for(let i=0; i<v.length; i++) {
            const idx = [];
            for(let j=0; j<keymap.length; j++) {
                if(keymap[j].includes(v[i])) idx.push(keymap[j].indexOf(v[i])+1)
            }
            cnt += Math.min(...idx)
        }
        if(cnt === Infinity) answer.push(-1);
        else answer.push(cnt);
    })
    return answer;
}