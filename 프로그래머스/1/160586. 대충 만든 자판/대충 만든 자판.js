function solution(keymap, targets) {
    const answer = [];
    targets.forEach((target) => {
        let sum = 0;
        for(let i=0; i<target.length; i++) {
            const min = [];
            for(let j=0; j<keymap.length; j++) {
                if(keymap[j].indexOf(target[i]) != -1) min.push(keymap[j].indexOf(target[i])+1);
            }
            if(min.length != 0) sum += Math.min(...min);
            else {
                answer.push(-1)
                sum = 0;
                break;
            }
        }
        if (sum != 0) answer.push(sum);
    })
    return answer;
}