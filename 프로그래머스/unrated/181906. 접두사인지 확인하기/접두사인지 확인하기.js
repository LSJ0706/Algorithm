function solution(my_string, is_prefix) {
    var answer = 0;
     var temp = [];
    for (let i=1; i<my_string.length; i++) {
        temp.push([...my_string].slice(0,i));
    }
    temp = temp.map(x=> x.join("")).sort();
    
    answer = temp.find((x) => x == is_prefix) ? answer =1 : answer =0;
    return answer;
}