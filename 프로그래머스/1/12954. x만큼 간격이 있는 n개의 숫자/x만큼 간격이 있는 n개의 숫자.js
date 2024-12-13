function solution(x, n) {
    return Array(n).fill(x).map((v,idx) => v += x*idx)
}