function solution(num_list) {
    return num_list.indexOf(num_list.filter((x) => x<0)[0]);
}