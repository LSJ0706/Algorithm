function solution(d, budget) {
    var answer = 0;
    var count = 0;
    d.sort((a,b) => a-b);
    while(answer < budget){
        answer += d[count];
        if(answer < budget) {
            count++
        }else{
            if(answer === budget) {
                return count+1
            }else {
                            return count
            }
        }
    }
}