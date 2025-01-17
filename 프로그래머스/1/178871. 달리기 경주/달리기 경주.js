function solution(players, callings) {
    const answer = players.reduce((acc,cur,idx) => {
        acc[cur] = idx;
        return acc;
    },{})
    callings.forEach((v) => {
        const next = players[answer[v]-1];
        players[answer[v]-1] = v;
        players[answer[v]] = next;
        
        answer[v] = answer[v] - 1;
        answer[next] = answer[v] + 1;
    });
    return players;
}