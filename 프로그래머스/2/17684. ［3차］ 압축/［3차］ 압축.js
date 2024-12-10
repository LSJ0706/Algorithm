function solution(msg) {
    const words = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const answer = [];
    let tempword = "";
    for(let i=0; i<msg.length; i++) {
        tempword += msg[i];
        if(!words.includes(tempword + msg[i+1])) words.push(tempword + msg[i+1]);
        else {
            continue;
        }
        if(words.includes(tempword)) {
            answer.push(words.indexOf(tempword)+1);
            tempword = "";
        }
    }
    return answer;
}