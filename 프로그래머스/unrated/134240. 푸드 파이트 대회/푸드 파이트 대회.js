function solution(food) {
    var answer = '';
    food.shift()
    answer = food.map((x,idx) => {
        if(x%2 !== 0) {
            return (idx+1).toString().repeat((x-1)/2)
        }else {
            return (idx+1).toString().repeat(x/2)
        }
    })
    
    return answer.join("") + "0" +answer.reverse().join("");
}