function solution(n) {
    let answer = '';
    const array = [4, 1, 2];
    while(n) {
        answer = array[n%3] + answer
        if(n%3 === 0){
            n = parseInt(n/3) - 1;
        }else {
            n = parseInt(n/3);
        }
    }
    return answer;
}