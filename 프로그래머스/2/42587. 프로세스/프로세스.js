function solution(priorities, location) {
    let queue = Array.from(new Array(priorities.length).keys());
    let maxValue
    let answer = 0;
    
    while(true) {
        maxValue = Math.max(...priorities);

        if(priorities[0] < maxValue) {
            priorities.push(priorities.shift());
            queue.push(queue.shift());
        }else {
            answer++
            priorities.shift();
            if(location == queue.shift()) return answer;
        }
    }
}
