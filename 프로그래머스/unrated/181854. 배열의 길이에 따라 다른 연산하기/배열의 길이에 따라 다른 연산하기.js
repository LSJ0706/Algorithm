function solution(arr, n) {
        var answer = arr.map((x,idx) => {
        if(arr.length%2 != 0) {
            if(idx%2 == 0){
                x += n
                console.log(x)
                return x
            }
        }else{
            if(idx%2 != 0){
                x += n
                return x
            }
        }
        return x
    })
    return answer;
}