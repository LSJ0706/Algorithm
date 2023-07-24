function solution(num_list) {
    var sum = 0;
    var multi = 1;

    for (let i=0; i<num_list.length; i++) {
        sum += num_list[i]
        multi *= num_list[i]
    }
    
    return sum*sum > multi ? 1 : 0;
}