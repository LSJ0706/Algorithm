function solution(N, stages) {
    stages.sort((a,b) => a-b)
    var fail = [];
    for(let i=1; i<=N; i++) {
        fail.push([i, stages.filter(x => x === i).length / stages.length])
        stages.splice(0,stages.filter(x => x === i).length)
    }
    var answer = fail.sort((a,b) => b[1] - a[1]).map(x => x[0])
    console.log(answer)
    return answer;
}