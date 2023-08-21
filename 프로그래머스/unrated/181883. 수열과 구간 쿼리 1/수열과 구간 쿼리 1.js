function solution(arr, queries) {
    queries.reduce((acc, cur) => {
        var [start, end] = cur;
        for(let i=start; i<=end; i++) {
            arr[i] += 1
        }
    }, arr)
    return arr;
}