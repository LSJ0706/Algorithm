function solution(s) {
    var answer = [];
    var arr = [...s];
    var number = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    arr.reduce((acc, cur) => {
        if(!number.includes(acc)) {
            acc += cur
            if(number.includes(acc)) {
                answer.push(number.indexOf(acc))
                acc = ""
            }else if(!isNaN(Number(acc))){
                answer.push(Number(acc))
                acc = ""
            }
        }
        return acc
    }, "")
    console.log(answer)
    return Number(answer.join(""));
}