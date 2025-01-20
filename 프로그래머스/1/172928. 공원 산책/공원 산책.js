function solution(park, routes) {
    let row, col;
    park = park.map((v,idx) => {
        if(v.indexOf("S") !== -1) [row, col] = [idx, v.indexOf("S")]
        return v.split("");
    });
    const [maxRow, maxCol] = [park.length, park[0].length];
    const coordinate = {
        E: [0,1],
        W: [0,-1],
        S: [1,0],
        N: [-1,0]
    };
    routes.forEach((v) => {
        const [type, num] = v.split(" ");
        let cnt = 0;
        let [tempRow, tempCol] = [row, col];
        while(cnt < num) {
            tempRow += coordinate[type][0];
            tempCol += coordinate[type][1];
            if(!park[tempRow] || !park[tempRow][tempCol] || park[tempRow][tempCol] === "X") break;
            cnt++;
        }
        if(cnt === Math.floor(num)) [row, col] = [tempRow,tempCol]
    });

    return [row, col];
}