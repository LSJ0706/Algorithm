function calGCD (a,b) {return a%b === 0 ? b : calGCD(b, a%b)};
function solution(n, m) {
    const GCD = calGCD(n,m);
    const LCM = (n*m)/GCD
    return [GCD, LCM];
}