function solution(k, tangerine) {
    let answer = 0;
    let sum = 0;
    const tangerineObj = tangerine.reduce((acc,cur) => {
        if(acc[cur] === undefined) acc[cur] = 1;
        else acc[cur]++;
        return acc;
    },{});
    const tan = Object.values(tangerineObj).sort((a,b) => b-a);
    for(let i=0; i<tan.length; i++) {
        answer++;
        sum += tan[i];
        if(sum >= k) break;
    }
    return answer;
}