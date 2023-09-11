function solution(x) {
    var answer = true;
    var x = x + ""
    var num = x.split("").map(x => Number(x)).reduce((acc,cur)=> acc + cur)
    return x%num === 0 ? answer : !answer;
}