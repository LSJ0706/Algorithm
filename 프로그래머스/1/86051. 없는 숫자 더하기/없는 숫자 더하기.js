function solution(numbers) {
    let answer = 0;
    const arr = Array.from(new Array(10), (v,i) => v = i);
    for(let i=0; i<arr.length; i++) {
        if(!numbers.includes(arr[i])) answer += arr[i];
    }
    return answer;
}