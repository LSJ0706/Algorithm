function solution(n, words) {
    const legacyWords = [];
    let tempWord = words[0];
    let [turn, person] = [0,0]
    
    for(let i=0; i<words.length; i++) {
        if(legacyWords[0] === undefined) {
            legacyWords.push(words[i])
        }else {
            if(tempWord.at(-1) === words[i][0] && !legacyWords.includes(words[i])) {
                legacyWords.push(words[i]);
                tempWord = words[i];
            }else {
                person = (i%n) + 1;
                turn = parseInt(i/n) + 1;
                break;
            }
        }
    }
    
    return [person,turn];
}