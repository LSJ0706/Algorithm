function isPrime (num) {
    if(num <= 1) return false;
    for(let i=2; i<=Math.sqrt(num); i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
} 

function solution(numbers) {
    let answer = 0;
    const arr = numbers.split("");
    const visited = new Array(arr.length).fill(false);
    const set = new Set();
    
    function DFS(depth, str) {
        if(depth === arr.length) return;
        for(let i=0; i<arr.length; i++) {
            if(!visited[i]) {
                visited[i] = true;
                set.add(parseInt(str + arr[i]));
                DFS(depth+1, str+arr[i]);
                visited[i] = false;
            }
        }
    }
    DFS(0, "");
    return [...set].filter(v => isPrime(v)).length;
}