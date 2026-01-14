function solution(k, dungeons) {
    const answer = [];
    const visited = new Array(dungeons.length).fill(false);
    const DFS = (fatigue, cnt) => {
        answer.push(cnt);
        for(let i=0; i<visited.length; i++) {
            const [need, consumption] = dungeons[i];
            if(!visited[i] && fatigue >= need) {
                visited[i] = true;
                DFS((fatigue - consumption), cnt + 1);
                visited[i] = false;
            }
        }
    };
    DFS(k, 0);
    return Math.max(...answer);
}