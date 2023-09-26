function solution(babbling) {
    var answer = 0;
    var words = ["aya", "ye", "woo", "ma"];
    babbling.forEach((x) => {
        for(let i=0; i<words.length; i++) {
            if(x.includes(words[i].repeat(2))) break;
            if(x.includes(words[i])) {
               x = x.replaceAll(words[i], " ")
            }
        }
        answer += x.replaceAll(" ","") === "" ? 1 : 0
    })
    return answer;
}