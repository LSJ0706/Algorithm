function solution(priorities, location) {
    let answer = 0;
    let max = Math.max(...priorities);

    while(priorities.length != 0) {
        while(priorities[0] != max) {
            priorities.push(priorities.shift());
            location = location === 0 ? priorities.length-1 : location-1;
        }
        answer++;
        priorities.shift();
        max = Math.max(...priorities);
        if(location === 0) break;
        location = location === 0 ? priorities.length-1 : location-1;
    }
    return answer;
}