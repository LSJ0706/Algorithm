function solution(numbers) {
    var arr = Array(9).fill().map((v,i) => i+1);
    return arr.filter(x => !numbers.includes(x)).reduce((acc,cur) => acc + cur);
}