function solution(s) {
    let answer = "";
    let temp = "";
    const num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    s.split("").forEach((v) => {
        if(isNaN(v)) {
            temp += v;
            if(num.includes(temp)) {
                answer += num.indexOf(temp);
                temp = "";
            }
        }
        else {
            answer += v;
        }
    })
    return Math.floor(answer);
}