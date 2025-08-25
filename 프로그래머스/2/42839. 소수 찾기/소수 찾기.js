const isPrime = (number) => {
    if(number <= 1) return false;
    for(let i=2; i<=Math.sqrt(number); i++) {
        if(number % i === 0) return false;
    }
    return true;
}

function solution(numbers) {
    let answer = 0;
    const numArr = numbers.split("");
    const set = new Set();
    const visited = new Array(numbers.length).fill(false);
    
    function DFS(num, len) {
        if(len === numArr.length) return;
        for(let i=0; i<numArr.length; i++) {
            if(!visited[i]) {
                visited[i] = true;
                set.add(parseInt(num + numArr[i]));
                DFS(num + numArr[i], len+1);
                visited[i] = false;
            }
        }
    }
    DFS('',0);
    return [...set].filter((v) => isPrime(v)).length;
}