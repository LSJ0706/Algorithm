function solution(s) {
    const middle = Math.ceil(s.length/2)
    return s.slice(middle-1, s.length%2 === 0 ? middle+1 : middle);
}