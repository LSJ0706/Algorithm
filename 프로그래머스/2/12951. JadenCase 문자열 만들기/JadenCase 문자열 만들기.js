function solution(s) {
    const answer = s.split(' ').map(sentence => sentence.replace(/\w/g,(t,idx)=>{
        return idx === 0 ? t.toUpperCase() : t.toLowerCase()
    })).join(' ')
    return answer
}