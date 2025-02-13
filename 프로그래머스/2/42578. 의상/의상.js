function solution(clothes) {
    let answer = 0;
    const obj = {};
    clothes.map(([clothe, body]) => {
        if(obj[body] === undefined) obj[body] = 1
        else obj[body]++
    });
    answer = Object.values(obj).reduce((acc,cur) => acc * (cur+1),1)
    return answer-1;
}