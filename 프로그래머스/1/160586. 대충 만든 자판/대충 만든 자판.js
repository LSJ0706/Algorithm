function solution(keymap, targets) {
    var answer = [];
    targets.forEach((e) => {
        var count = 0;
        for(let i=0; i<e.length; i++) {
            var click = [];
            for(let j=0; j<keymap.length; j++) {
                if(keymap[j].includes(e[i])) {
                    click.push(keymap[j].indexOf(e[i]))
                }
            }
            count += Math.min(...click) + 1
        }
        count !== Infinity ? answer.push(count) : answer.push(-1)
    })
    return answer;
}