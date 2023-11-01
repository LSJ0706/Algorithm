function solution(numbers, target) {
    var answer = 0;
    const DFS = (count, sum) => {
        if(count === numbers.length){
            if(target === sum){
                answer++
            }
            return;
        }
        DFS(count + 1, sum + numbers[count])
        DFS(count + 1, sum - numbers[count])
    }
    
    DFS(0,0)
    return answer;
}