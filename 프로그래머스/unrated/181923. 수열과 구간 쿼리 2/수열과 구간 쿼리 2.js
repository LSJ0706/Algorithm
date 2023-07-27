function solution(arr, queries) {
    var result =[];
    
    for(let i=0; i<queries.length; i++) {
        const [s, e, k] = queries[i];
        var num = [];
        for(let j=s; j<=e; j++) {
            if(arr[j]>k) {
                num.push(arr[j]);
            }
         }
         if(num.length === 0) {
            result.push(-1)
         }else {
            result.push(Math.min(...num))
         }
         
    }
    return result;
}