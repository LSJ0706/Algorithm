function solution(a, d, included) {
    var answer = 0;

    for (let i=0; i<included.length; i++) {
        included[i] == true ? answer += a : answer;
        a += d;
    }

    return answer;
}