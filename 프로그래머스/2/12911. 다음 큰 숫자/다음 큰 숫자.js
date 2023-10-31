function solution(n) {
    var answer = 0;
    var l = [...n.toString(2)].filter(x=> x== 1).length;
    while(true) {
        n++
        var nl = [...n.toString(2)].filter(x=> x== 1).length;
        if(l === nl) {
            return n
            break;
        }
    }
}