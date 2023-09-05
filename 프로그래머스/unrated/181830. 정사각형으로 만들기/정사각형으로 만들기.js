function solution(arr) {
    var row = arr.length;
    var col = arr[0].length;
    if(row > col) {
        var zero = new Array(row-col).fill(0);
        arr = arr.map(x=>[...x, ...zero])
    }
    if(col > row){
        var zero = new Array(col).fill(0);
        for(let i=0; i<col-row; i++) {
                    arr.push(zero);
        }
    }
    return arr;
}