function solution(board) {
    let answer = 0;
    let arr = [];
    const n = Math.sqrt(board.length ** 2)
    for(let i=0; i<n; i++) {
        for(let j=0; j<n; j++) {
            if(board[i][j] === 1)
                arr.push([i,j])
        }
    }
    arr.map(([row, col]) => {
        if(row>0 && col>0) board[row-1][col-1] = "*"
        if(row>0) board[row-1][col] = "*"
        if(row>0 && col<n-1) board[row-1][col+1] = "*"
        if(col>0) board[row][col-1] = "*"
        if(col<n-1) board[row][col+1] = "*"
        if(row<n-1 && col>0) board[row+1][col-1] = "*"
        if(row<n-1) board[row+1][col] = "*"
        if(row<n-1 && col<n-1) board[row+1][col+1] = "*"
    })
    return board.flat(2).filter((x) => x==0).length
}