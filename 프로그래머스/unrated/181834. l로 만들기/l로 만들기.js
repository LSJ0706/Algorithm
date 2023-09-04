function solution(myString) {
    var answer = [...myString].map((x) => {
        if("l".charCodeAt(0) > x.charCodeAt(0)) {
            x = "l"
        }
        return x
    })
    return answer.join("");
}