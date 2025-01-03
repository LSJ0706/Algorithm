function isDecimal (num) {
    let flag = true;
    for(let i=2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

function solution(nums) {
    let answer = 0;
    for(let i=0; i<nums.length-2; i++) {
        for(let j=i+1; j<nums.length-1; j++) {
            for(let k=j+1; k<nums.length; k++) {
                if(isDecimal(nums[i] + nums[j] + nums[k])) answer++;
            }
        }
    }
    return answer;
}