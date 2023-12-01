function solution(cipher, code) {
    var answer = '';
    for(let i=code; i<=cipher.length; i += code) {
        answer += cipher[i-1]
    }
    return answer;
}