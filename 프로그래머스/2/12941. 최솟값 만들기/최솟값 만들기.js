function solution(A,B){
    var answer = 0;
    var An = A.sort((a,b) => a-b);
    var Bn = B.sort((a,b) => b-a);
    for(let i=0; i<An.length; i++) {
        answer += An[i] * Bn[i]
    }
    return answer;
}