function solution(strArr) {
    strArr = strArr.map((x,idx) => {
        if(idx%2 == 0) return x.toLowerCase();
        else return x.toUpperCase();
    });
    return strArr;
}