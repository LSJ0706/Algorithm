function solution(s) {
    let answer = "";
    answer = s.split(" ").map((v) => {
        if(v.trim() !== "") {
        v = v.toLowerCase();
        v = v[0].toUpperCase() + v.substr(1);
        }
        return v;
    });
    return answer.join(" ");
}