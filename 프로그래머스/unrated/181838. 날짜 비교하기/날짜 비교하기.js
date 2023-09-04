function solution(date1, date2) {
     date1 = new Date(date1[0], date1[1], date1[2]);
    date2 = new Date(date2[0], date2[1], date2[2]);
    return date1.getTime() < date2.getTime() ? 1 : 0;
}