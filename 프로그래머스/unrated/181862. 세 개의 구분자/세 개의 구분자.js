function solution(myStr) {
        var answer = myStr.replace(/a|b|c/g, " ").trim().split(" ").filter(x => x != "");
    return answer.length != 0 ? answer : ["EMPTY"];
}