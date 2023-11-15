function solution(s) {
    var answer = [];
    var arr = [];
    s = s.replace('{{', "").replace('}}',"").split("},{").sort((a,b) => a.length-b.length)
    for(let i=0; i<s.length; i++) {
        arr.push(s[i].split(","))
    }
    arr.forEach((e) => {
        for(let i=0; i<e.length; i++) {
            if(!answer.includes(e[i])) answer.push(e[i])
        }
    })
    return answer.map((x) => Number(x));
}