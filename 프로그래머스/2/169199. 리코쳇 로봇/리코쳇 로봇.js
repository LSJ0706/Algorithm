function solution(board) {
    let answer = -1;
    let sx, sy;
    
    const dir = [[1,0], [-1,0], [0,1], [0,-1]];
    const [maxX, maxY] = [board.length, board[0].length];
    board = board.map((v) => v.split(""));
    
    for(let i=0; i<board.length; i++) {
        for(let j=0; j<board[0].length; j++) {
            if(board[i][j] === "R") {
                sx = i;
                sy = j;
                break;
            }
        }
    }
    
    const visited = Array.from({length:maxX}, () => new Array(maxY).fill(false));
    
    const queue = [[sx, sy, 0]];
    visited[sx][sy] = true;
    
    while(queue.length) {
        let [x, y, cnt] = queue.shift();
        
        if(board[x][y] === "G") {
            answer = cnt;
            break;
        }
        
        for(let i=0; i<dir.length; i++) {
            let moveX = x + dir[i][0];
            let moveY = y + dir[i][1];
            while(moveX >= 0 &&
                  moveY >= 0 &&
                  moveX < maxX &&
                  moveY < maxY &&
                  board[moveX][moveY] !== "D"
                 ) {
                moveX += dir[i][0];
                moveY += dir[i][1];
            }
            moveX -= dir[i][0];
            moveY -= dir[i][1];
            
            if(!visited[moveX][moveY]) {
                visited[moveX][moveY] = true;
                queue.push([moveX, moveY, cnt+1]);
            }
        }
    }
    
    return answer;
}