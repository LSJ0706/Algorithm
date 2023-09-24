function solution(answers) {
    const math = [[1, 2, 3, 4, 5],[2, 1, 2, 3, 2, 4, 2, 5],[3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
    var arr = [];
    var answer = [];
    for(let i=0; i<math.length; i++) {
        var score = 0;
        for(let j=0; j<answers.length; j++) {
            if (answers[j] === math[i][j % math[i].length]) score++
        }
        arr.push(score)
    }
        for (let i = 0; i < arr.length; i++) {
        if (arr[i] === Math.max(...arr)) {
            answer.push(i + 1);
        }
    }
    return answer
}