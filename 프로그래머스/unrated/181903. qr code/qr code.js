function solution(q, r, code) {
    var answer = '';
    for(let i=r; i<code.length; i+=q) {
        answer += code[i];
    }
    return answer;
}