function solution(n) {
    const answer = Array.from({length:n}, (_,idx) => new Array(idx+1).fill(0));
    let [x, y] = [-1 ,0];
    let cnt = 1;
    let idx = 1;
    while(n > 0) {
        for(let i=0; i<n; i++) {
            if(idx % 3 === 1) {
                answer[x+1][y] = cnt;
                x++;
            }
            else if(idx % 3 === 2) {
                answer[x][y+1] = cnt;
                y++;
            }
            else if(idx % 3 === 0) {
                answer[x-1][y-1] = cnt;
                x--;
                y--;
            }
            cnt++;
        }
        idx++;
        n--;
    }
    return answer.flat();
}