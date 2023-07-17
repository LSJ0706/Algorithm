function solution(a, b) {
    var ans = Math.max(2*a*b, Number(`${a}${b}`));
    return ans;
}