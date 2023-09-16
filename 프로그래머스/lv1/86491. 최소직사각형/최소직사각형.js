function solution(sizes) {
    var w = [];
    var h = [];
    var answer = 0;
    
    for(let i=0; i<sizes.length; i++) {
        var max = Math.max(sizes[i][0], sizes[i][1]);
        var min = Math.min(sizes[i][0], sizes[i][1]);
        w.push(max)
        h.push(min)
    }
    return Math.max(...w) * Math.max(...h);
}