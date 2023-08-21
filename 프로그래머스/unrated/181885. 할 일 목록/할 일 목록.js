function solution(todo_list, finished) {
    var answer = [];
    todo_list.filter((x,idx) => {
        if(!finished[idx]){
            answer.push(x);
        }
    })
    return answer;
}