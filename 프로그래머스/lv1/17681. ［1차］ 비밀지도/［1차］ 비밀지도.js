function solution(n, arr1, arr2) {
    arr1 = arr1.map(x => x.toString(2).padStart(n, '0')).map(v => v.split(""))
    arr2 = arr2.map(x => x.toString(2).padStart(n, '0')).map(v => v.split(""))
    arr1.reduce((acc,cur,idx) => {
        for(let i=0; i<cur.length; i++) {
            cur[i] = cur[i] + arr2[idx][i]
        }
        return acc;
    },new Array(n))
    
    arr1.map((x) => {
        for(let i =0; i<x.length; i++) {
            if(x[i] === "00") {
                x[i] = " "
            }else {
                x[i] = "#"
            }
        }
    })

    return arr1.map(x => x.join(""));
}