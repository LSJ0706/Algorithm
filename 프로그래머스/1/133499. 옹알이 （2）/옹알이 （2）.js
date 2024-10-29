function solution(babbling) {
    let answer = 0;
    const babbl = [ "aya", "ye", "woo", "ma"]
    babbling.forEach((v) => {
        for(let i=0; i<babbl.length; i++) {
            if(v.includes(babbl[i].repeat(2))) break;
            v = v.split(babbl[i]).join(" ");
        }
        if(v.split(" ").join("").length === 0) answer++
    })
    return answer;
}