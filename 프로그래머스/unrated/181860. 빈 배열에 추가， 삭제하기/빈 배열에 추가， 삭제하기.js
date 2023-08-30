function solution(arr, flag) {
    var answer = [];
    flag.map((x,idx) => {
        if(x) {
            answer = answer.concat(new Array(arr[idx]*2).fill(arr[idx]))
        }else{
            answer.splice(-arr[idx], arr[idx])
        }
    })
    return answer;
}