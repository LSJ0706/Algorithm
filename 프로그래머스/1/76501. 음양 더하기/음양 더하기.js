function solution(absolutes, signs) {
    let answer = 0;
    absolutes.forEach((v,idx) => {
        if(signs[idx]) {
            answer += v
        }else {
            answer -= v
        }
    })
    return answer;
}