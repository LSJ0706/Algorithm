function solution(arr) {
    const answer = {
        0:0,
        1:0,
    };
    const len = arr.length;
    
    function DFS(x, y, len) {

        const half = len / 2;
        const set = new Set();
        for(let i=x; i<x+len; i++) {
            for(let j=y; j<y+len; j++) {
                set.add(arr[i][j]);
            }
        }
        
        if(set.size === 1) {
            answer[arr[x][y]]++;
            return;
        }
        
        DFS(x, y, half);
        DFS(x+half, y, half);
        DFS(x, y+half, half);
        DFS(x+half, y+half, half);
    }
    
    DFS(0, 0, len);
    return [answer[0], answer[1]];
}