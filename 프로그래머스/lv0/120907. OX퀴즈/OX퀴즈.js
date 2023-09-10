function solution(quiz) {
    
    var answer = quiz.map((x) => {
        x = x.split(" ")
        if(x[1] == "+"){
            return Number(x[0]) + Number(x[2]) === Number(x[4]) ? "O" : "X"
        }else{
            return Number(x[0]) - Number(x[2]) === Number(x[4]) ? "O" : "X"
        }
    })
    return answer
}