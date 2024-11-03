function solution(participant, completion) {
    let answer = '';
    const playerMap = participant.reduce((acc,cur) => {
        if(acc.get(cur) == undefined) acc.set(cur, 1);
        else acc.set(cur, acc.get(cur)+1);
        return acc
    },new Map());
    
    completion.forEach((v) => {
        playerMap.set(v, playerMap.get(v) - 1);
    });
    for(let [player, success] of playerMap) {
        if (success != 0) answer = player
    }
    return answer;
}