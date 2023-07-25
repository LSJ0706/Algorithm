function solution(arr) {
    var answer = arr.reduce((acc,cur) => acc+cur)/arr.length;
    return answer;
}