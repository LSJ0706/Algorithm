function solution(priorities, location) {
    let answer = 0;
    const queue = Array.from(new Array(priorities.length).fill(0), (_,idx) => idx);
    while(queue.length) {
        const maxValue = Math.max(...priorities);
        if(priorities[0] !== maxValue) {
            queue.push(queue.shift());
            priorities.push(priorities.shift());
        }
        else {
            answer++;
            priorities.shift();
            if(location === queue.shift()) return answer
        }
    }
    return answer;
}