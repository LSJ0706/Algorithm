function solution(n) {
    var answer = 0;
    var DP = new Array(n).fill(0);
    DP[0] = 1
    DP[1] = 1
    for(let i=2; i<=n; i++) {
        DP[i] = (DP[i-1] + DP[i-2])%1234567  
    }
    return DP[n];
}