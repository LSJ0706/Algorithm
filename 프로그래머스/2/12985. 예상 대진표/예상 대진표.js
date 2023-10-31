function solution(n,a,b) {
    var answer = 1;
    for(let i=0; i<Math.log2(n); i++) {
        if(a%2 == 1) {
            if(b == a+1) {
                return answer;
            }
        }else {
            if(a == b+1) {
                return answer;
            }
        }
        a = Math.ceil(a/2)
        b = Math.ceil(b/2)
        answer++
    }
}