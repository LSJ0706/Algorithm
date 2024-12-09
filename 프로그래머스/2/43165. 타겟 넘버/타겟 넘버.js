function solution(numbers, target) {
    let answer = 0;
    
    function DFS (sum, idx) {
        if(idx === numbers.length) {
            if(sum === target) answer++;
            return;
        }
            DFS(sum + numbers[idx], idx+1);
            DFS(sum - numbers[idx], idx+1);
        }
    
    DFS(0, 0);
    return answer;
}