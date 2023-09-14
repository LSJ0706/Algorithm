function solution(n) {
    var answer = 0;
    return parseInt(n.toString(3).split("").reverse().join(""),3);
}