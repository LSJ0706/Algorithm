function solution(n) {
    var arr = [];
    var ans = 0;
    if(n === 0) {
        return 0
    }
    
    for(let i=1; i<=Math.sqrt(n); i++) {
        if(n%i === 0){
            arr.push(i)
            if(n/i != i) {
                arr.push(n/i)
        }
        }
        
    }
    ans = arr.reduce((acc,cur) => acc + cur,0)
    return ans;
}