function solution(names) {
    var answer = [];
    var num = Math.ceil(names.length/5);
    for (let i=0; i<num; i++) {
        answer.push(names.splice(0,5)[0])
    }
    return answer;
}