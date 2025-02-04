function solution(n) {
    const DP = [1,1];
    for(let i=2; i<=n; i++) {
        DP[i] = (DP[i-1] + DP[i-2])%1234567
    }
    return DP[n];
}