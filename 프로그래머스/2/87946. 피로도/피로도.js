function solution(k, dungeons) {
    var answer = [];
    var visited = new Array(dungeons.length).fill(false)
    function DFS (fatigue, count) {
        answer.push(count);
        
        for(let i=0; i<dungeons.length; i++) {
            let current = dungeons[i];
            if(fatigue >= current[0] && !visited[i]) {
                visited[i] = true;
                DFS(fatigue-current[1], count+1);
                visited[i] = false;
            }
        }
    }
    DFS(k, 0)
    return Math.max(...answer);
}