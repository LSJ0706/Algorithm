function solution(k, tangerine) {
    var obj = {}
    var answer = 0;
    var sum = 0;
    tangerine.forEach((e) => {
        obj[e] = ++obj[e] || 1;
    });
    const kind = Object.values(obj).sort((a,b) => b-a);
    for(let num of kind) {
        answer++
        sum += num
        if(sum>= k) break;
    }
    
    return answer;
}