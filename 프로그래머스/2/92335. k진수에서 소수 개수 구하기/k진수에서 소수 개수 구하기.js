function solution(n, k) {
    let answer = 0;
    const num = n.toString(k).split(0).filter((x) => x != "");
    num.forEach((demical) => {
        if(demical != 1) {
            for(let i=2; i<=Math.sqrt(demical); i++) {
                if(demical%i == 0) {
                    answer--
                    break;
                }
            }
            answer++
        }
    })
    return answer;
}