function solution(s) {
    let answer = '';
    answer = s.split(" ").map((v) => {
        return v.split("").map((el, idx) => {
            if(idx % 2 === 0) el = el.toUpperCase();
            else el = el.toLowerCase();
            return el;
        }).join("");
    }).join(" ");
    
    return answer;
}