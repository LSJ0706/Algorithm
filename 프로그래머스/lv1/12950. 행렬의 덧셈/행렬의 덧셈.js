function solution(arr1, arr2) {
    var answer = arr1.map((row,rowIdx) => 
                 row.map((col,colIdx) => {
                 return col + arr2[rowIdx][colIdx]
                 }))
    return answer;
}