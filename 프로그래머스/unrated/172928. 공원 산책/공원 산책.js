function solution(park, routes) {
    const row = park.length -1;
    const col = park[0].length -1;
    
    var sRow = park.findIndex((x) => x.includes("S"));
    var sCol = park[sRow].indexOf("S");
    
    routes.forEach((coordinate)=> {
        var tempRow = sRow;
        var tempCol = sCol;
        var flag = true;
        var [a,b] = coordinate.split(" ");
        
        for(let i=0; i<Number(b); i++){
            if(a === "E") tempCol++;
            else if(a === "W") tempCol--;
            else if(a === "N") tempRow--;
            else if(a === "S") tempRow++;
            
            if(
            tempRow > row ||
            tempRow < 0 ||
            tempCol > col ||
            tempCol < 0 ||
            park[tempRow][tempCol] === "X"
            ) {
                flag = false;
                break;
            }
        }
        if(flag){
            sRow = tempRow;
            sCol = tempCol;
            console.log(sRow, sCol)
        }
        
    })
    return [sRow, sCol];
}