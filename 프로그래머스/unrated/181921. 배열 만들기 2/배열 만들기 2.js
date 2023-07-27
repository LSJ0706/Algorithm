function solution(l, r) {
    var answer = [];
    for (let i=l; i<=r; i++) {
        i = String(i)
        var set = new Set(i.split(""))
        var arr = [...set].map(x=>Number(x));
        if(JSON.stringify(arr) == JSON.stringify([5,0])
          || JSON.stringify(arr) == JSON.stringify([5])
        ){
            answer.push(i);
        }
    }
    if(answer.length === 0) {
        answer.push(-1)
    }
    return answer.map(x=> Number(x));
}