function solution(strings, n) {
    return strings.sort((a,b) => {
        if(a[n] !== b[n]) {
            return a[n] > b[n] ? 1 : -1
        }else {
            return a > b ? 1: -1
        }
    })
}