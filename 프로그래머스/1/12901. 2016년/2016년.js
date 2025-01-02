function solution(a, b) {
    const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const week = ["THU","FRI","SAT", "SUN","MON","TUE","WED"]
    let day = b;
    for(let i=0; i<a-1; i++) {
        day += month[i];
}
    return week[day%7];
}