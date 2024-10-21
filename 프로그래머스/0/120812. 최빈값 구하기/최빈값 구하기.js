function solution(array) {
    let answer=[];
    const obj = array.reduce((acc,cur) => {
        if(acc[cur] >= 1) acc[cur] += 1
        else acc[cur] = 1;
        return acc;
    },{});
    Object.keys(obj).forEach((v) => {
        if(obj[v] === Math.max(...Object.values(obj))) answer.push(v);
    })

    return answer.length == 1 ? Number(answer[0]) : -1;
}
