function solution(maps) {
    const [n,m] = [maps.length-1, maps[0].length-1]
    const queue = [];
    const x = [1, -1, 0, 0];
    const y = [0, 0, 1, -1];
    
    queue.push([0,0,1])
    maps[0][0] = 0;
    
    while(queue.length) {
        const [tx, ty, count]= queue.shift();
        
        if(tx === n && ty === m) return count
        
        for(let i=0; i<4; i++) {
            const curX = tx + x[i];
            const curY = ty + y[i];
            
            if(curX>=0 && curX<=n && curY>=0 && curY<=m && maps[curX][curY] === 1) {
                queue.push([curX,curY,count+1]);
                maps[curX][curY] = 0;
            }
        }
        
    }
    return -1;
}