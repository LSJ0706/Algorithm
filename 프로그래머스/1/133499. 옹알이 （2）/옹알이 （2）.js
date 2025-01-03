function solution(babbling) {
    let answer = 0;
    const words = ["aya", "ye", "woo", "ma"];
    babbling.forEach((v) => {
        for(let i=0; i<words.length; i++) {
            if(v.includes(words[i].repeat(2))) break;
            if(v.includes(words[i])) v = v.replaceAll(words[i], " ");
        }
        if(v.replaceAll(" ","").length === 0) answer++;
    })
    return answer;
}