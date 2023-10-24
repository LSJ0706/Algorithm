function solution(n) {
    var number = [0, 1]
    var answer = 0;
    for(let i=2; i<=n; i++) {
        number.push((number[i-2] + number[i-1]) % 1234567)
    }
    answer = number[n]
    return answer;
}