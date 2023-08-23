function solution(myString) {
    var answer = myString.replaceAll("x", " ").split(" ")
    return answer.map(x => x.length);
}