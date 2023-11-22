function solution(msg) {
    const words = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const answer = [];
    while(msg.length !== 0) {
        let w="";
        for(let i=1; i<=msg.length; i++) {
            let c = msg.slice(0,i);
            if(!words.includes(c)) {
                words.push(c);
                break;
            }
            w = c;
        }
        answer.push(words.indexOf(w)+1);
        msg = msg.substr(w.length)
    }

    return answer;
}