function solution(players, callings) {
    var rank = new Map();

    for(let i=0; i<players.length; i++) {
        rank.set(players[i], i)
    }

    callings.forEach(e => {
        var temp = players[rank.get(e)-1];
        players[rank.get(e)-1] = players[rank.get(e)];
        players[rank.get(e)] = temp

        rank.set(e, rank.get(e)-1)
        rank.set(temp, rank.get(e)+1)
    });
    return players;
}