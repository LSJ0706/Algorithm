function solution(number) {
    var arr = [...number].map(x => Number(x));
    var answer = arr.reduce((x,y) => x+y ,0)
    return answer%9;
}