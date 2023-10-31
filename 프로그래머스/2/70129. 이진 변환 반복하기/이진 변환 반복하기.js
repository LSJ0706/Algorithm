function solution(s) {
    var zero = 0;
    var count = 0;
    while(s != 1) {
        var l = [...s].map(x=>Number(x)).filter(x=>{
        if(x === 0) zero++
        return x === 1
    }).join("").length
    s = l.toString(2)
    count++
    }
    return [count, zero];
}