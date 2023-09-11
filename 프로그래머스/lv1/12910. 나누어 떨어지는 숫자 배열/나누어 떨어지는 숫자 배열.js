const solution = (a,d) => {
    var answer = a.filter(x => x%d === 0).sort((a,b) => a-b);
    return answer.length != 0 ? answer : [-1]
} 