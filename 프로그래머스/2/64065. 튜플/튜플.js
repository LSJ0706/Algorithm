function solution(s) {
    const answer = [];
    s = s.replace("{{", "").replace("}}","").split("},{").sort((a,b) => a.length-b.length);
    s.forEach((v,idx) => {
        v = v.split(",");
        answer.push(v.filter((el) => !answer.includes(el))[0])
    })
    return answer.map(Number);
}