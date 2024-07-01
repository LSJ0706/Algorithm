function solution(n, words) {
    const answer = [0,0];
    let first = words[0];
    const word = [first];
    for(let i=1; i<words.length; i++) {
        let last = words[i];
        if(first[first.length-1] !== last[0] || word.includes(last)) {
            answer[0] = i%n + 1
            answer[1] = Math.ceil((i+1)/n);
            break;
        }
        word.push(last);
        first = last;
    }
    return answer;
}