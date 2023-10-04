function solution(participant, completion) {
    var answer = '';
    var part = participant.sort().reduce((acc, cur) => {
        if(acc.get(cur) !== undefined) { 
            acc.set(cur, acc.get(cur)+1)
        } else { 
            acc.set(cur, 1) 
        }
        return acc
    },new Map())
    completion.forEach((e) => {
        part.set(e, part.get(e)-1)
    })
    participant.forEach((e) => {
        if(part.get(e) === 1) {
            answer = e
            }
    })
    return answer
}