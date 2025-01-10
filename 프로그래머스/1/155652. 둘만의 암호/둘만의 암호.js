function solution(s, skip, index) {
    let answer = '';
    const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const arr = alpha.filter(v => !skip.includes(v));
    s.split("").forEach((v) => {
        const num = arr.indexOf(v) + index  >= arr.length ? (arr.indexOf(v) + index) % arr.length : arr.indexOf(v) + index
        answer += arr[num]
    })
    return answer;
}