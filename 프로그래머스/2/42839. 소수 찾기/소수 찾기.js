function isPrime(num) {
    if(num <= 1) return false;
    for(let i=2; i<=Math.sqrt(num); i++) {
        if(num % i === 0) return false;
    }
    return true;
}

function solution(numbers) {
    const answer = new Set();
    const visited = new Array(numbers.length).fill(false);
    const numArr = numbers.split("");
    
    function DFS(str, len) {
        if(len > visited.length) return;
        for(let i=0; i<visited.length; i++) {
            if(!visited[i]) {
                const newNum = str + numArr[i];
                answer.add(parseInt(newNum));
                visited[i] = true;
                DFS(newNum, len+1);
                visited[i] = false;
            }
        }
    }
    
    DFS('',0);
    return [...answer].filter((v) => isPrime(v)).length;
}