function solution(park, routes) {
    let [row,col] = [0,0];
    park = park.map((v) => v.split(""));
    for(let i=0; i<park.length; i++) {
        if(park[i].includes("S")) {
            row = i;
            col = park[i].indexOf("S");
        } 
    }
    routes.forEach((v) => {
        const route = v.split(" ");
        const direction = route[0]; 
        const range = parseInt(route[1]);
        
        if(direction == "E"){
            if(col+range < park[row].length &&
               !park[row].slice(col,col+range+1).includes("X")) col += range;
        }else if(direction == "W"){
            if(col-range >= 0 &&
               !park[row].slice(col-range,col+1).includes("X")) col -= range;
        }else if(direction == "S"){
            let temp = row;
            for(let i=0; i<range; i++) {
                row++;
                if(row >= park.length || park[row][col] == "X") {
                    row = temp;
                    break;
                }
            }
        }else {
            let temp = row;
            for(let i=0; i<range; i++) {
                row--;
                if(row < 0 || park[row][col] == "X") {
                    row = temp;
                    break;
                }
            }
        }
                        console.log(row);
    })
    return [row, col];
}