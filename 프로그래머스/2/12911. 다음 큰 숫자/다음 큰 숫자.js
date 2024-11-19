function solution(n) {
    const len = n.toString(2).split("").filter(v => v === "1").length;
    while(true) {
        n++
       if (len === n.toString(2).split("").filter(v => v === "1").length) return n
    }
}