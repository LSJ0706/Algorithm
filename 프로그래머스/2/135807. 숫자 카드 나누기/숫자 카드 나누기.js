function calGCD (a,b) {
    if(a % b === 0) {
        return b;
    }
    return calGCD(b, a % b);
}

function solution(arrayA, arrayB) {
    let answer = 0;
    
    const aGCD = arrayA.reduce((acc, cur) => calGCD(acc, cur));
    const bGCD = arrayB.reduce((acc, cur) => calGCD(acc, cur));
    
    const isValidA = arrayB.every((v) => v % aGCD !== 0);
    const isValidB = arrayA.every((v) => v % bGCD !== 0);
    
    if(isValidA) answer = Math.max(answer, aGCD);
    if(isValidB) answer = Math.max(answer, bGCD);
    
    return answer;
}