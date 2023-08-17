function solution(num_list, n) {
    var arr1 = num_list.splice(n);
    var arr2 = num_list.splice(0,n);
    return arr1.concat(arr2);
}