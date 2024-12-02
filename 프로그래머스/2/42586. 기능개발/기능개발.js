function solution(progresses, speeds) {
    let answer = [];
    let stack = [];
    
    while(progresses.length != 0) {
        for(let i=0; i<progresses.length; i++) {
            progresses[i] += speeds[i];
        }
        
        while(progresses[0] >= 100) {
            stack.push(progresses.shift());
            speeds.shift();
        }
        
        if(stack.length != 0) {
            answer.push(stack.length);
            stack = [];
        }
    }
    return answer;
}