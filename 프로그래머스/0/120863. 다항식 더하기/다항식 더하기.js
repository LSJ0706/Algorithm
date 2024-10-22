function solution(polynomial) {
    const answer = [];
    const arr = polynomial.split(" + ");
    const xNum = arr.filter((v) => v.includes("x")).map((v) => v.replace('x', '') || '1')
    .reduce((acc,cur) => acc + parseInt(cur,10), 0)
    const num = arr.filter((v) => !v.includes('x')).reduce((acc, cur) => acc + parseInt(cur, 10), 0)
    if(xNum) answer.push(`${xNum === 1 ? "" : xNum}x`)
    if(num) answer.push(num)
    return answer.join(" + ");
}