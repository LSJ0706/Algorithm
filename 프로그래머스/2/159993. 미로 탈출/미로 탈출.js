function findStart (maps, state) {
    for(let i=0; i<maps.length; i++) {
        for(let j=0; j<maps[0].length; j++) {
            if(maps[i][j] === state) return [i, j];
        }
    }
}

function solution(maps) {
    let answer = 0;
    const moving = [[1,0], [-1,0], [0,1], [0,-1]];
    let [sX, sY] = findStart(maps, "S");
    
    function BFS(x, y, target) {
        const queue = [[x, y, 0]];
        const visited = Array.from({ length: maps.length }, () => Array(maps[0].length).fill(false));
        while(queue.length !== 0) {
            const [tempX, tempY, cnt] = queue.shift();
            if(maps[tempX][tempY] === target) {
                answer += cnt;
                sX = tempX;
                sY = tempY;
                break;
            }
            
            for(let move of moving) {
                const [moveX, moveY] = move;
                if(tempX + moveX >= 0 && 
                   tempX + moveX < maps.length && 
                   tempY + moveY >= 0 && 
                   tempY + moveY < maps[0].length &&
                   maps[tempX + moveX][tempY + moveY] !== "X" &&
                   !visited[tempX+moveX][tempY+moveY]
                  ) {
                    visited[tempX+moveX][tempY+moveY] = true;
                    queue.push([tempX+moveX, tempY+moveY, cnt+1]);
                }
            }
        }
        if(x === sX && y === sY) answer = -1;
        
    }
    
    BFS(sX, sY, "L");
    if(answer === -1) return answer;
    
    BFS(sX, sY, "E");
    if(answer === -1) return answer;
    
    return answer;
}