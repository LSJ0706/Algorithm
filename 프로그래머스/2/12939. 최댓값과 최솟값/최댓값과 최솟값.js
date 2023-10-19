function solution(s) {
    var answer = [];
    s = s.split(" ").map((x) => Number(x))
    answer.push(Math.min(...s))
    answer.push(Math.max(...s))
    return answer.join(" ");
}