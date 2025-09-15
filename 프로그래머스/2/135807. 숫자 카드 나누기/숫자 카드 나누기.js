function calGCD (a,b) {
    if(a % b === 0) {
        return b;
    }
    return calGCD(b, a % b);
}

function solution(arrayA, arrayB) {
    let answer = 0;
    
    const aGCD = arrayA.reduce((acc,cur) => calGCD(acc, cur));
    const bGCD = arrayB.reduce((acc,cur) => calGCD(acc, cur));
    
    const aValid = arrayB.every((v) => v % aGCD !== 0);
    const bValid = arrayA.every((v) => v % bGCD !== 0);
    
    if(aValid) { answer = Math.max(answer, aGCD) }
    if(bValid) { answer = Math.max(answer, bGCD) }
    
    return answer;
}