function GCD(a,b) {
    return a%b === 0 ? b : GCD(b, a%b);
}
function solution(numer1, denom1, numer2, denom2) {
    const num = numer1*denom2 + numer2*denom1;
    const denom = denom1*denom2;
    const gcd = GCD(num, denom);
    return [num/gcd, denom/gcd];
}