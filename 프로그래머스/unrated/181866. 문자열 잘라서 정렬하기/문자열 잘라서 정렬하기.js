function solution(myString) {
    var answer = [];
    return myString.replaceAll("x", " ").split(" ").filter(x => x).sort()
}