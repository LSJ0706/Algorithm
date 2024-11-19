function solution(brown, yellow) {
    const carpet = brown + yellow;
    let [row, col] = [3,3];
    for(let i=col; i<=carpet/col; i++) {
        row = Math.floor(carpet/i);
        if((row-2)*(i-2) === yellow) {
            col = i;
            break;
        }
    }
    return [row, col];
}