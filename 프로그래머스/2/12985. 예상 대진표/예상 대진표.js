function solution(n,a,b) {
    let answer = 0;
    while(true) {
        answer++;
        if(Math.ceil(a/2) === Math.ceil(b/2)) break;
        else {
            n = n/2;
            a = a%2 == 0 ? a/2 : (a+1)/2;
            b = b%2 == 0 ? b/2 : (b+1)/2;
        }
        
    }
    return answer;
}