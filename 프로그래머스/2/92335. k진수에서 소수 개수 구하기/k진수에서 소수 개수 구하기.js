function isPrime(num){
    if(!num || num===1) return false;
    for(let i=2; i<=+Math.sqrt(num); i++){
        if(num%i===0) return false;
    }
    return true;
}

function solution(n, k) {    
    const candidates = n.toString(k).split('0');
    return candidates.filter(v=>isPrime(+v)).length;
}