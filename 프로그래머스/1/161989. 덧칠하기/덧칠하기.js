function solution(n, m, section) {
    let answer = 0;
    let painted = 0;
    for(let v of section) {
        if(v > painted){
            answer++
            painted = v + m - 1;
        }
    }
    return answer;
}