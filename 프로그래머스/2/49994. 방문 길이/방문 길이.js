function solution(dirs) {
    const direction = {U:[0,1], D:[0,-1], L:[-1,0], R:[1,0]};
    let now = [0,0];
    const map = new Set();
    
    for(let dir of dirs) {
        let nowX = now[0] + direction[dir][0];
        let nowY = now[1] + direction[dir][1];
        if(nowX > 5 || nowX < -5 || nowY > 5 || nowY < -5) continue;
        map.add("" + now[0] + now[1] + nowX + nowY)
        map.add("" + nowX + nowY + now[0] + now[1])
        now = [nowX, nowY];
    }
    return map.size/2;
}