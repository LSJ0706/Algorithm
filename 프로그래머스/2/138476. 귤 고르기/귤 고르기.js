function solution(k, tangerine) {
    let answer = 0;
    let sum = 0;
    const tangerineObj = tangerine.reduce((acc,cur) => {
        acc.set(cur,acc.get(cur)+1 || 1)
        return acc;
    },new Map())
    const type = [...tangerineObj.values()].sort((a,b) => b-a);
    for(let i=0; i<tangerineObj.size; i++) {
        if(sum >= k) break;
        answer++;
        sum += type[i]
    }
    return answer;
}