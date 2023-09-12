function solution(absolutes, signs) {
    var arr = absolutes.map((x,idx) => {
        return signs[idx] === true ? x : -x
    })
    return arr.reduce((acc, cur) => acc + cur);
}