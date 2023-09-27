function solution(X, Y) {
    var X = [...X]
    var Y = [...Y]
    var answer = '';
    
    for(let i=0; i<10; i++) {
        var xLen = X.filter(x => Number(x) === i).length;
        var yLen = Y.filter(y => Number(y) === i).length;
        answer += String(i).repeat(Math.min(xLen,yLen));
    }
    answer = [...answer].reverse().join("")
    return answer === "" ? "-1" : answer[0] === "0" ? "0" : answer;
}