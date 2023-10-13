function solution(wallpaper) {
    var answer = [];
    var coordinate = [];
    var rdx, rdy, lux, luy;
    for(let i=0; i<wallpaper.length; i++) {
        for(let j=0; j<wallpaper[0].length; j++) {
            if(wallpaper[i][j] === "#") {
                coordinate.push([i,j,i+1,j+1])
            }
        }
    }
    coordinate.forEach((e) => {
        if(rdx === undefined || rdx > e[0]){
            rdx = e[0]
        }
        if(rdy === undefined || rdy > e[1]){
            rdy = e[1]
        }
        if(lux === undefined || lux < e[2]){
            lux = e[2]
        }
        if(luy === undefined || luy < e[3]){
            luy = e[3]
        }
    })
    answer = [rdx, rdy, lux, luy]
    return answer;
}