function solution(arr) {
    const ans = {
        0:0,
        1:0,
    }
    
    const len = arr.length;
    
    function DFS(startRow, startCol, len) {
        const set = new Set();
        const half = len/2;
        
        for(let i=startRow; i<startRow + len; i++) {
            for(let j=startCol; j<startCol + len; j++) {
                set.add(arr[i][j]);
            }
        }

        if(set.size === 1) {
            ans[arr[startRow][startCol]]++;
            return;
        }
        
        DFS(startRow, startCol, half);
        DFS(startRow+half, startCol, half);
        DFS(startRow, startCol+half, half);
        DFS(startRow+half, startCol+half, half);
    }
    
    DFS(0, 0, len);
    
    return [ans[0],ans[1]];
}