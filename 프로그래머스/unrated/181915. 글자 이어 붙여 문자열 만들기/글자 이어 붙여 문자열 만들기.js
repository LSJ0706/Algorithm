function solution(my_string, index_list) {
    var stringList = [...my_string];
    var answer = '';
    for (let i=0; i<index_list.length; i++) {
        answer += stringList[index_list[i]]
    }
    return answer;
}