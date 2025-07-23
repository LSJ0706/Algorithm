function solution(sequence, k) {
    const answer = [];
    let [left, right] = [0, 0];
    let sum = sequence[0];
    
    while (true) {
        if (sum > k) {
            sum -= sequence[left];
            left++;
        } else if (sum < k) {
            right++;
            sum += sequence[right];
        } else if (sum === k) {
            answer.push([left, right]);
            sum -= sequence[left];
            left++;
        }
        if (left > sequence.length - 1 || right > sequence.length - 1) break;
    }
    answer.sort((a,b) => (a[1] - a[0])-(b[1] - b[0]))
    return answer[0];
}