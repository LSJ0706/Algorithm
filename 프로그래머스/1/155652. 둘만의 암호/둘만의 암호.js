function solution(s, skip, index) {
    var alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    alpha = alpha.filter((e) => !skip.includes(e))
    var answer = [...s].map((v) => {
        if(alpha.length <= alpha.indexOf(v)+index) {
            v = alpha[(alpha.indexOf(v)+index) % alpha.length]
        }else {
            v = alpha[alpha.indexOf(v)+index]
        }
        return v
    })
    return answer.join("");
}