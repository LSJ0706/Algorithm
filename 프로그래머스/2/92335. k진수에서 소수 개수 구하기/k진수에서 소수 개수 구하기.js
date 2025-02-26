const isPrime = (number) => {
    if(number === 1) return false;
    for(let i=2; i<=Math.sqrt(number); i++) {
        if(number%i === 0) return false;
    }
    return true;
}

function solution(n, k) {
    let answer = 0;
    const num = n.toString(k).split("0").map(Number).filter(x => x !== 0);
    for(let i=0; i<num.length; i++) {
        if(isPrime(num[i])) answer++;
    }
    return answer;
}