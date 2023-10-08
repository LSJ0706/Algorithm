function solution(s) {
    var answer = 0;
    var str = s.split("");
    var temp = undefined
    var diff = 0;
    var same = 0;
    
    str.forEach((e) => {
        if(temp === undefined) {
            temp = e
            same++
        }else if(temp === e) {
            same++
        }else {
            diff++
        }
        
        if(same === diff) {
            answer ++
            [same, diff] = [0,0]
            temp = undefined
        }
    })
    if(same !==0 || diff !== 0) {answer++}
    
    return answer;
}