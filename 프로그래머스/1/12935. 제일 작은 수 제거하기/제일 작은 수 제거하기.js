function solution(arr) {
    let min = Math.min(...arr);
    arr = arr.filter(v => v != min)
    return arr.length !== 0 ? arr : [-1];
}