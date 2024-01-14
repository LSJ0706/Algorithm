function solution(sequence, k) {
    let [p1, p2] = [0,0];
    let sum = sequence[p1];
    const answer = [];
    
    while(p2 < sequence.length) {
        if(sum < k) {
            sum += sequence[++p2];
        }else if(sum > k){
            sum -= sequence[p1++];
        }else {
            answer.push([p1, p2])
            sum += sequence[++p2];
            sum -= sequence[p1++];
        }
    }
    console.log(answer)
    return answer.sort((a,b) => (a[1] - a[0]) - (b[1] - b[0]))[0];
}