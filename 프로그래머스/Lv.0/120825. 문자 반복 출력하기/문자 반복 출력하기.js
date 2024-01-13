function solution(my_string, n) {
    let answer = "";
   [...my_string].forEach((x) => {
       for(let i=0; i<n; i++) {
           answer+=x
       }
    })
    return answer;
}