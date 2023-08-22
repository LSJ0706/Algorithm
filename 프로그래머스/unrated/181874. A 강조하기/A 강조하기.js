function solution(myString) {
    strArr = [...myString];
    return strArr.map((x) => 
        x == "a" || x == "A" ? x.toUpperCase() : x.toLowerCase()
    ).join("");
}