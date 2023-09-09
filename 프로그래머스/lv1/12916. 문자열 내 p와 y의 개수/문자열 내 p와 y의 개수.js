function solution(s){
    s = [...s.toLowerCase()]
    var [p, y] = [0,0]
    
    s.forEach((x) => {
        if(x === "p"){
            p += 1
        }else if(x === "y"){
            y += 1
        }
    })
    return p===y ? true : false
}