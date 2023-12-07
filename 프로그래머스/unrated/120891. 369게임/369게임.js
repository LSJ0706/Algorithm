function solution(order) {
    var answer = 0;
    var num = ["3","6","9"]
    order.toString().split("").forEach((e) => {
        if(num.includes(e)) {
            answer++
        }
    })
    return answer;
}