function solution(strArr) {
    var answer = strArr.reduce((acc,cur) => {
        var length = cur.length;
        acc.set(length, acc.get(length) ? acc.get(length) + 1 : 1)
        return acc
    }, new Map());
    return Math.max(...answer.values());
}