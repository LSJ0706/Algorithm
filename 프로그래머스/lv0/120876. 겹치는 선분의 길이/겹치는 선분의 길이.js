function solution(lines) {
    var arr = new Array(200).fill(0)
    lines.forEach(([x,y]) => {
        for(let i=x; i<y; i++) {
            arr[i+100] +=1
        }
    })
    return arr.filter(x => x>=2).length;
}