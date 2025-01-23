function solution(s) {
    let zeroCut = 0;
    let binaryTrans = 0;
    while(s != "1") {
        const sArr = s.split("")
        zeroCut += sArr.filter(v => v === "0").length
        s = sArr.filter(v => v !== "0").length.toString(2);
        binaryTrans++;
    }

    
    return [binaryTrans, zeroCut];
}