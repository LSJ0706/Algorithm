function solution(my_string) {
    var answer = new Array(52).fill(0);
    [...my_string].forEach((str, idx) => {
        var alpha = my_string.charCodeAt(idx);

        if(alpha >= 65 && alpha <= 90) {
            answer[alpha-65] +=1;
        }else{
            answer[(alpha-97) + 26] +=1;
        }
    })
    return answer;
}