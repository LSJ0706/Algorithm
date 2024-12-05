function solution(clothes) {
    let answer = 1;
    const map = clothes.reduce((acc,cur) => {
        const [clothe, type] = cur;
        if(acc[type] === undefined) acc[type] = 1;
        else acc[type]++;
        return acc;
    },{});
    for(let i in map) {
        answer *= map[i]+1
    }

    return answer-1;
}