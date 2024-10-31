function solution(N, stages) {
    let answer = [];
    for(let i=1; i<=N; i++) {
        answer.push([i,stages.filter((v) => v == i).length/stages.length])
        stages = stages.filter((v) => v >i);
    }
    answer = answer.sort((a,b) => b[1]-a[1]);

    
    return answer.map((v) => {
        v = v[0];
        return v
    });
}