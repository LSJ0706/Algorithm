function solution(wallpaper) {
    const code = [];
    let lux, luy, rdx, rdy;
    const coordinate = wallpaper.map((v) => v.split(""));
    for(let i=0; i<coordinate.length; i++) {
        for(let j=0; j<coordinate[0].length; j++) {
            if(coordinate[i][j] == '#') code.push([i,j]);
        }
    }
    code.forEach((v) => {
        lux = lux <= v[0] ? lux : v[0];
        luy = luy <= v[1] ? luy : v[1];
        rdx = rdx >= v[0] ? rdx : v[0];
        rdy = rdy >= v[1] ? rdy : v[1];
    })
    
    return [lux, luy, rdx+1, rdy+1];
}