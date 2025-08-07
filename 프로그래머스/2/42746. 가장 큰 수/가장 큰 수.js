function solution(numbers) {
    let answer = '';
    answer = numbers.map(number=> number + '').sort((a,b) => (b+a) - (a+b)).join('');
    return answer[0] === '0' ? '0' : answer
}