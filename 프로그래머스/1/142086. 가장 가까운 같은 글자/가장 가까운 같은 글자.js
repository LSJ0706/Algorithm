function solution(s) {
    const answer = [];
    s = [...s];
    for(let i=0; i<s.length; i++) {
        const str = s.slice(0,i)
        const idx = str.lastIndexOf(s[i]);
        answer.push(idx === -1 ? idx : str.length-idx);
    }
    return answer;
}