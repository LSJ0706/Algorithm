function solution(num_list) {
    var array = [];
    if(num_list.at(-1) > num_list.at(-2)) {
        num_list.push(num_list.at(-1) - num_list.at(-2));
        array = num_list;
    }else {
        num_list.push(num_list.at(-1) * 2);
        array = num_list;
    }
    return array;
}