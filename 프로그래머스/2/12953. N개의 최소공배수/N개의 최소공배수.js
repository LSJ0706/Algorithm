function solution(arr) {
    return arr.reduce((acc, cur) => (acc*cur) / calGCD(acc,cur))
}
function calGCD (a,b) {
    return a%b ? calGCD(b,a%b) : b
}