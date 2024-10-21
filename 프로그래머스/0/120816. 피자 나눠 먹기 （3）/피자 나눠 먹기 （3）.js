function solution(slice, n) {
    let p = 1;
    while(true) {
        if(slice*p >= n) break;
        p++
    }
    return p;
}