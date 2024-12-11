function solution(dirs) {
    let x = 0;
    let y = 0;
    const directions = {
        'U' : [0,1], 
        'D' : [0,-1], 
        'R' : [1,0], 
        'L' : [-1,0]
    };
    const visited = new Set();
    for(let i=0; i<dirs.length; i++) {
        if(x+directions[dirs[i]][0] <= 5 && 
           x+directions[dirs[i]][0] >= -5 && 
           y+directions[dirs[i]][1] <= 5 && 
           y+directions[dirs[i]][1] >= -5) {
            
            let tempX = x + directions[dirs[i]][0];
            let tempY = y + directions[dirs[i]][1];
            
            visited.add(`${x}, ${y}, ${tempX}, ${tempY}`);
            visited.add(`${tempX}, ${tempY}, ${x}, ${y}`);
            
            x = tempX;
            y = tempY;
        }
    }
    return visited.size/2;
}