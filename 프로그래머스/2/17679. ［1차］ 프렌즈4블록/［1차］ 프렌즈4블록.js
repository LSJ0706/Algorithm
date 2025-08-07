function solution(m, n, board) {
    let answer = 0;
    let tiles = [];
    board = board.reduce((acc,cur) => {
        acc.push(cur.split(""));
        return acc;
    },[]);
    
    while(true) {
        for(let i=0; i<board.length-1; i++) {
        for(let j=0; j<board[0].length-1; j++) {
            if(board[i][j] === board[i][j+1] &&
               board[i][j] === board[i+1][j] &&
               board[i][j] === board[i+1][j+1] &&
               board[i][j] !== '*'
              ) tiles.push([i,j]);
        }
    }
    
    if(tiles.length === 0) return board.flat().filter(v => v === '*').length;
    
    tiles.forEach((tile) => {
        const [x, y] = tile;
        board[x][y] = '*';
        board[x+1][y] = '*';
        board[x][y+1] = '*';
        board[x+1][y+1] = '*';
    });
        tiles = [];
        
    for(let i=board.length-1; i>=0; i--) {
        for(let j=board.length-1; j>=0; j--) {
            if(board[i][j] === '*') {
                for(let k=i; k>=0; k--) {
                    if(board[k][j] !== '*') {
                        board[i][j] = board[k][j];
                        board[k][j] = '*';
                        break;
                    }
                }
            }
        }
    }
    }
    
    
    return answer;
}