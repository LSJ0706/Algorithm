function isPrime (num) {
    for(let i=2; i<=Math.sqrt(num); i++) {
        if(num%i === 0) return false;
    }
    return true;
}

function solution(n) {
    let answer = 0;
    const arr = new Array(n+1).fill(true);
    for(let i=2; i<=n; i++) {
        if(arr[i]) {
            if(isPrime(i)) {
               for(let j=2*i; j<=n; j+=i) {
                   arr[j] = false
               } 
            }
        }
    }
    return arr.filter((v) => v == true).length-2;
}