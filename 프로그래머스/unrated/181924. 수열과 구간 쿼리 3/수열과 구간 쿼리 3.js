function solution(arr, queries) {
    for (let i=0; i<queries.length; i++) {
        var tmp = arr[queries[i][0]];
        arr[queries[i][0]] = arr[queries[i][1]];
        arr[queries[i][1]] = tmp;
    }
    return arr;
}