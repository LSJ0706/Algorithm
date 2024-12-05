function solution(n) {
    const arr = new Array(n+1);
    arr[0] = 1;
    arr[1] = 1;
    
    for(let i=2; i<=n; i++) {
        arr[i] = arr[i-2]%1234567 + arr[i-1]%1234567;
    }
    
    return arr[n]%1234567;
}