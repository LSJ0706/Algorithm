function solution(friends, gifts) {
    const answer = [];
    const giveFriends = friends.reduce((acc,cur) => {
        acc[cur] = [];
        return acc;
    },{});
    const takeFriends = friends.reduce((acc,cur) => {
        acc[cur] = [];
        return acc;
    },{});
    const giftNum = friends.reduce((acc,cur) => {
        acc[cur] = 0;
        return acc;
    },{});
    gifts.forEach((v) => {
        const [givePerson, takePerson] = v.split(" ");
        giveFriends[givePerson].push(takePerson);
        takeFriends[takePerson].push(givePerson);
    });
    friends.forEach((v) => {
        giftNum[v] = giveFriends[v].length - takeFriends[v].length;
    });
    
    friends.forEach((v) => {
        let cnt = 0;
        friends.forEach((el) => {
            if(el != v) {
                if (giveFriends[v].filter(x => x == el).length > takeFriends[v].filter(x => x == el).length) cnt++;
                else if(giveFriends[v].filter(x => x == el).length == takeFriends[v].filter(x => x == el).length && 
                        giftNum[v] > giftNum[el]) cnt++
            }
        })
        answer.push(cnt);
    })
    return Math.max(...answer);
}