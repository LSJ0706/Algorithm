function solution(elements) {
    const circularQueue = [...elements,...elements];
    const answer = [];
    for(let i=1; i<=elements.length; i++) {
        for(let j=0; j<elements.length; j++) {
            answer.push(circularQueue.slice(j,j+i).reduce((acc,cur) => acc + cur))
        }
    }
    const answerSet = new Set(answer);
    return [...answerSet].length;
}