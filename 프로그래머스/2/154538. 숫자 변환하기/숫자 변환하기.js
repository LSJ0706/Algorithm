function solution(x, y, n) {
    const DP = new Array(y+1).fill(-1);
    DP[x] = 0;
    for(let i=x; i<=y; i++) {
        if(DP[i] === -1) continue;
        if(i+n <= y) {
            if (DP[i+n] === -1) DP[i+n] = DP[i] + 1
            else DP[i+n] = Math.min(DP[i+n],DP[i]+1);
        }
        if(i*2 <= y) {
            if (DP[i*2] == -1) DP[i*2] = DP[i] + 1
            else DP[i*2] = Math.min(DP[i*2],DP[i]+1);
        }
        if(i*3 <= y) {
            if (DP[i*3] == -1) DP[i*3] = DP[i] + 1
            else DP[i*3] = Math.min(DP[i*3],DP[i]+1);
        }
    }
    return DP[y];
}