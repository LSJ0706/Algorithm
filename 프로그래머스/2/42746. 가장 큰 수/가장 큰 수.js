function solution(numbers) {
    const answer = numbers.map((x) => String(x)).sort((a,b) => (b+a) - (a+b)).join("");
    return answer[0] === '0' ? '0' : answer
}