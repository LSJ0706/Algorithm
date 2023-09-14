const changeStr = (str) => {
    for(let i=0; i<str.length; i++) {
        if(i%2 === 0) {
            str[i] = str[i].toUpperCase();
        }else {
            str[i] = str[i].toLowerCase();
        }
    }
    return str.join("")
}

function solution(s) {
    var str = s.split(" ").map((x) => {
        return changeStr(x.split(""));
    });
    return str.join(" ");
}

