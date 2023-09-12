function solution(s) {
    var arr = [...s].map((x) => {
        x = x.charCodeAt()
        return x
    })
    var answer = arr.sort((a,b) => b-a).map((x) => {
        x = String.fromCharCode(x)
        return x
    });
    
    return answer.join("");
}