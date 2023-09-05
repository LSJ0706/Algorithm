function solution(n) {
     var len = n-1;
    var num = 1;
    var col = 0;
    var row = 0;

    var answer = Array.from(new Array(n), () =>new Array(n).fill(0));

    while(num <= n*n){
        if((n-1)/2 == col && (n-1)/2 == row) {
            answer[row][col] = num;
            num++
        }
        for(let i=0; i<len; i++) {
            answer[row][col] = num;
            col++
            num++
        }

        for(let i=0; i<len; i++) {
            answer[row][col] = num;
            row++
            num++
        }

        for(let i=0; i<len; i++) {
            answer[row][col] = num;
            col--
            num++
        }

        for(let i=0; i<len; i++) {
            answer[row][col] = num;
            row--
            num++
        }
        len -= 2
        row ++
        col ++
    }
    return answer;
}