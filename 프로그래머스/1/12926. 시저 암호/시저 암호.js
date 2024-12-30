function solution(s, n) {
    let arr = s.split("").map((x) => x.charCodeAt(0))
    arr = arr.map((x) => {
        if(x>=65 && x<=90) {
            if(x+n>90) {
                x = x+n-26
            }else {
                x += n
            }
        } else if(x>=97 && x<=122) {
            if(x+n>122) {
                x = x+n-26
            }else {
                x += n
            }
        }
        return x
    });
    let answer = arr.map((x) => String.fromCharCode(x))
    return answer.join("");
    
    //65 90 
    //97 122
}