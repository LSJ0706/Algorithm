function solution(nums) {
    var arr = [];
    var answer = 0;
    for(let i=0; i<nums.length; i++) {
        for(let j=i+1; j<nums.length; j++) {
            for(let k=j+1; k<nums.length; k++) {
                arr.push(nums[i] + nums[j] + nums[k])
            }
        }
    }
    arr.forEach((x) => {
        var check =true;
        for(let i=2; i<=Math.sqrt(x); i++) {
           if(x%i === 0) {
               check = false
           }
        }
        answer += check ? 1 : 0
    })
    
    return answer;
}