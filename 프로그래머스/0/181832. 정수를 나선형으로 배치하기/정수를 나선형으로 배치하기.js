function solution(n) {
    const answer = Array.from(Array(n), () => Array(n).fill(0));
    let [row, col] = [0, 0];
    let num = 1;
    for(let i=n; i>0; i-=2) {
        for(let j=0; j<i; j++) {
            answer[row][col] = num;
            col++;
            num++;
        }
        col--;
        row++;
        
        for(let j=0; j<i-1; j++) {
            answer[row][col] = num;
            row++;
            num++;
        }
        col--;
        row--;
        
        for(let j=0; j<i-1; j++) {
            answer[row][col] = num;
            col--;
            num++;
        }
        col++;
        row--;
        
        for(let j=0; j<i-2; j++) {
            answer[row][col] = num;
            row--;
            num++;
        }
        col++;
        row++;
    }
    
    return answer;
}