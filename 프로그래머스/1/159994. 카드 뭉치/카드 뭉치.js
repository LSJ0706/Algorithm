function solution(cards1, cards2, goal) {
    let answer = '';
    for(const word of goal) {
        if(cards1[0] === word) {
            answer += cards1.shift();
            
        }else if(cards2[0] === word) {
            answer += cards2.shift();
        }else {
            return "No"
        }
    }
    return "Yes";
}