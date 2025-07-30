function solution(players, m, k) {
    const servers = [];
    let tempServer = 1;

    players.forEach((player, idx) => {
        // ✅ 서버 회수는 항상 실행되어야 함
        if (idx >= k) tempServer -= servers[idx - k];

        const possible = tempServer * m - 1;

        if (player > possible) {
            const needServer = Math.ceil((player - possible) / m);
            servers.push(needServer);
            tempServer += needServer;
        } else {
            servers.push(0);
        }
    });

    return servers.reduce((acc, cur) => acc + cur, 0);
}
