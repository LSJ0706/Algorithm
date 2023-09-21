function solution(cards1, cards2, goal) {
    var idx = 0;
    
    while(idx < goal.length) {
        if(cards1[0] === goal[idx]) {
            cards1.shift()
            idx++
        }else if(cards2[0] === goal[idx]) {
            cards2.shift()
            idx++
        }else {
            break;
        }
    }

    return idx === goal.length ? 'Yes' : 'No';
}