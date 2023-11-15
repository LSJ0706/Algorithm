function solution(clothes) {
    var answer = 1;
    var arr = {};
    clothes.map(([cloth, body]) => {
        if(arr[body] === undefined) {
            arr[body] = 1
        }else {
            arr[body] ++
        }
    })
    for(let key in arr) {
        answer *= (arr[key]+1)
    }
    return answer-1;
}