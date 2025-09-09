function solution(players, m, k) {
    let tempServer = 1;
    const servers = [];
    
    players.forEach((player,idx) => {
        if (idx-k >= 0) tempServer -= servers[idx-k];
        let addServer = 0;
        while(player > tempServer * m - 1) {
            addServer++;
            tempServer++;
        };
        servers.push(addServer);
    });
    return servers.reduce((acc,cur) => acc + cur);
}