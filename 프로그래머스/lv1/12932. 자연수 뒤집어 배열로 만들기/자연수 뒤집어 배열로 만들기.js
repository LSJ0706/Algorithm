function solution(n) {
    var answer = n.toString().split("").map(x => Number(x)).reverse()
    console.log(answer)
    return answer;
}