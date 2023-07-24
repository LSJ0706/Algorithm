function solution(num_list) {
    var odd = [];
    var even = [];
    var answer = 0;

    for (let i=0; i<num_list.length; i++) {
        if(num_list[i]%2 != 0) {
            odd.push(num_list[i]);
        }
        else{
            even.push(num_list[i]);
        }
    }
    answer = Number(odd.join("")) + Number(even.join(""));
    return answer;
}