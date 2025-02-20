function solution(k, dungeons) {
    const answer = [];
    const visited = new Array(dungeons.length).fill(false);
    function DFS(fatigue, cnt) {
        answer.push(cnt);
        for(let i=0; i<dungeons.length; i++) {
            let current = dungeons[i];
            if(current[0] <= fatigue && !visited[i]) {
                visited[i] = true;
                DFS(fatigue - current[1], cnt+1);
                visited[i] = false;
            }
        }
    }
    DFS(k,0)
    return Math.max(...answer);
}