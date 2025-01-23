function solution(n) {
    let idx = 2;
    const fibo = [0,1];
    while(idx <= n) {
        fibo[idx] = (fibo[idx-1] + fibo[idx-2])%1234567
        idx++;
    }
    return fibo[n]%12345678;
}