function solution(k, dungeons) {
    const answer = [];
    const visited = new Array(dungeons.length).fill(false);
    function DFS(tired, cnt) {
        answer.push(cnt);
        for(let i=0; i<visited.length; i++) {
            if(!visited[i] && tired >= dungeons[i][0]) {
                visited[i] = true;
                DFS(tired-dungeons[i][1], cnt+1);
                visited[i] = false;
            }
            
        }
    }
    DFS(k, 0);
    return Math.max(...answer);
}