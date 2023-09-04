function solution(order) {
    var answer = order.reduce((acc, cur) => {
        if(cur.includes("cafelatte")){
            acc += 5000
        }else {
            acc += 4500
        }
        return acc
    },0);
    return answer;
}