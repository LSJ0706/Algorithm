function solution(a, b) {
    return a.reduce((acc, _ , idx) => acc += a[idx] * b[idx],0);
}