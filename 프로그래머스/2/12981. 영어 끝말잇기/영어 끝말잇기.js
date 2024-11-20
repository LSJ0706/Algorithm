function solution(n, words) {
    let temp;
    const saidWords = [];
    let cnt = 0;
    let person = 0;
    for(let i=0; i<words.length; i++) {
        if(saidWords.length === 0) saidWords.push(words[i]);
        else {
            if(saidWords.includes(words[i]) || temp[temp.length-1] != words[i][0]) {
            cnt = Math.ceil((i+1)/n);
            person = i%n + 1;
            break;
            }
            saidWords.push(words[i]);
        }
        temp = words[i];
    }

    return [person, cnt];
}