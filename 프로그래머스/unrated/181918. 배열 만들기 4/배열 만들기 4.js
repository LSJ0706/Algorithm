function solution(arr) {
    var i = 0;
    var stk = [];

    while(i<arr.length) {
        if(stk.length === 0) {
            stk.push(arr[i]);
            i++;

        }else if(stk.at(-1) < arr[i]) {
            stk.push(arr[i]);
            i++;

        }else{
            stk.pop();
        }
    }
    return stk;
}