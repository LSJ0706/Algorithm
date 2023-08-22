function solution(my_string, alp) {
    var strArr = [...my_string];
    return strArr.map((x) => x == alp ? x.toUpperCase() : x.toLowerCase()).join("")
}