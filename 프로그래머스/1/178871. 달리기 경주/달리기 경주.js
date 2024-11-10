function solution(players, callings) {
    const rate = {};
    for(let i=0; i<players.length; i++) {
        rate[players[i]] = i;
    };
    
    callings.forEach((v) => {
        const tempIdx = rate[v];
        const next = players[tempIdx-1];
        
        players[tempIdx-1] = v;
        players[tempIdx] = next;
        
        rate[v] = tempIdx-1;
        rate[next] = tempIdx;
    })
    return players;
}