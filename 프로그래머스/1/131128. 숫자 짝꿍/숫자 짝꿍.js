function solution(X, Y) {
    let answer = '';
    X = [...X];
    Y = [...Y];
    for(let i=0; i<10; i++) {
        const numX = Y.filter(v => v == i).length;
        const numY = X.filter(v => v == i).length;
        const min = Math.min(numX, numY);
        answer += `${i}`.repeat(min);
    }
    answer = [...answer].reverse().join("");
    return  answer === "" ? "-1" : answer[0] === "0" ? "0" : answer;
}