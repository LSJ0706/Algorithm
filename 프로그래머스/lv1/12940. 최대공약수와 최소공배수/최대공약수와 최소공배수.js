function solution(n, m) {
    var gcd = 1;
    for(let i=1; i<=Math.min(n,m); i++) {
        if(n%i===0 && m%i===0) gcd = i;
    }
    var lcm = (n*m/gcd)
    return [gcd, lcm];
}