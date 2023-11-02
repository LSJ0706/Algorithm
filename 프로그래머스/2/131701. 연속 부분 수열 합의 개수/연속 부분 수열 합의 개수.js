function solution(elements) {
    var circlequeue = [...elements,...elements]
    var answer = new Set();
    for(let i=1; i<=elements.length; i++) {
        for(let j=0; i+j<circlequeue.length; j++) {
            answer.add(circlequeue.slice(j, i+j).reduce((acc,cur) => acc+cur, 0))
        }
    }
    return answer.size;
}