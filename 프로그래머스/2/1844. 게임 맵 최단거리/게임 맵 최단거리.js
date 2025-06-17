function solution(maps) {
    const queue = [[0,0,1]];
    const moveX = [1, -1, 0, 0];
    const moveY = [0, 0, 1, -1];
    
    while(queue.length !== 0) {
        const [x, y, cnt] = queue.shift();
        if(x === maps.length-1 && y === maps[0].length-1) return cnt;
        for(let i=0; i<4; i++) {
            const cx = x + moveX[i];
            const cy = y + moveY[i];
            if(cx >= 0 && cy >= 0 && cx < maps.length && cy < maps[0].length && maps[cx][cy] === 1) {
                queue.push([cx,cy,cnt+1]);
                        maps[cx][cy] = 0;
            }
        }

    }

    return -1;
}