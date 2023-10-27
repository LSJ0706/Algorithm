function solution(brown, yellow) {
    var num = brown+yellow;
    for(let col=3; col<=brown; col++) {
        if(num%col === 0){
            let row = num/col
            if((col-2)*(row-2) === yellow) {
                return [row, col]
            }
        }
    }
}