function solution(s) {
    let answer = '';
    const arr = s.split(" ").map((e) => {
        return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
    })
    return arr.join(" ");
}