function solution(clothes) {
    let answer = 1;
    const arr = clothes.reduce((acc,cur) => {
        const [_, type] = cur
        if(acc[type] === undefined) acc[type] = 1
        else acc[type] = acc[type]+1;
        return acc
    },{})
    for(let type in arr) {
        answer *= (arr[type]+1)
    }
    return answer-1;
}