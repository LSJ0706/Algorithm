function solution(arr) {
    var answer = [];
        arr.map((x) => {
        x != answer.at(-1) ? answer.push(x) : answer.pop()
        return x;
    })

    return answer.length != 0 ? answer : [-1]
}