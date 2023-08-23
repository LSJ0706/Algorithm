function solution(myString, pat) {
    myString = [...myString].map((x => {
        if(x == "A") {
            return x="B";
        }else {
            return x="A"
        }
    }));
    return myString.join("").includes(pat) ? 1 : 0
}