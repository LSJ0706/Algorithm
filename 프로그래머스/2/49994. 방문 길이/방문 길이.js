function solution(dirs) {
    let answer = 0;
    let [x, y] = [0, 0];
    const move = {
        U : [0,1],
        D : [0,-1],
        R : [1,0],
        L : [-1,0],
    };
    const coor = [];
    dirs.split("").forEach((dir) => {
        const [cx, cy] = move[dir];
        const newX = x + cx;
        const newY = y + cy;
        
        if(x + cx <= 5 && 
           x + cx >= -5 && 
           y + cy <= 5 && 
           y + cy >= -5
          ) {
            if(
           !coor.includes(`${newX}${newY}${x}${y}`)&&
           !coor.includes(`${x}${y}${newX}${newY}`)) {
                answer ++;
                coor.push(`${x}${y}${newX}${newY}`);
            }
            x = newX;
            y = newY;
           }
    })
    return answer;
}