function solution(n) {
    var answer = Array(n).fill("수").map((x,idx) => {
        if(idx%2 !== 0) x = "박"
        return x
    });
    return answer.join("");
}