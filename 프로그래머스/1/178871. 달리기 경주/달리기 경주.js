function solution(players, callings) {
    const playersObj = players.reduce((acc,cur,idx) => {
        acc[cur] = idx
        return acc;
    },{});
    callings.forEach((v) => {
        const temp = playersObj[v];
        const next = playersObj[v]-1;
        players[temp] = players[next];
        players[next] = v;
        
        playersObj[v]--;
        playersObj[players[temp]] ++;
    })
    return players;
}