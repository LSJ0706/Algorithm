function solution(n, m, section) {
    var answer = 0;
    var block = new Array(n).fill(1)
    var paint = new Array(m).fill(1)
    section.map((x) => {
        block[x-1] = 0
    })
    block.map((x,idx) => {
        if(x === 0) {
            block.splice(idx,m,paint)
            answer ++
        }
    })

    return answer;
}