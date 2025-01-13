function solution(wallpaper) {
    const x = [];
    const y = [];
    wallpaper.forEach((v,row) => {
        v.split("").forEach((el,col) => {
            if(el === "#") {
                x.push(row);
                y.push(col);
            }
        });
    });
    return [Math.min(...x),Math.min(...y),Math.max(...x)+1,Math.max(...y)+1];
}