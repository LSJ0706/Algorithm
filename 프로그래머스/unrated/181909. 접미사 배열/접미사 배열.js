function solution(my_string) {
    var answer = [];
    var arr = [...my_string]
    for(let i=0; i<my_string.length; i++) {
        answer.push(arr.slice(i))
    }
    return answer.map(x=>x.join("")).sort();
}