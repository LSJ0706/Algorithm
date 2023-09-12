function solution(arr) {
    var min = Math.min(...arr)
    arr.splice(arr.indexOf(min),1)
    return arr.length !==0 ? arr : [-1];
}