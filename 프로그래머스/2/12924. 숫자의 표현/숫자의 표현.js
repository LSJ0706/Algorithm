function solution(n) {
    var answer = 0;

    for(let i=1; i<(n/2); i++) {
        let a = i
        let acc = i
        while(true) {
            if(a < n) {
                acc += 1
                a += acc
            }else if(a === n) {
                answer++;
                break;
            }else if(a > n) {
                break;
            }
        }
    }
    return answer+1;
}
