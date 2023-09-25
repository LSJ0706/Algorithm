function solution(n) {
    var nums = new Array(n+1).fill(true).fill(false,0,2);
    var decimal = [];
    for(let i=2; i<=Math.sqrt(n); i++) {
        if(nums[i]) {
            for(let j=i*i; j<=n; j+=i){
                nums[j] = false;
            }
        }
    }
    return nums.filter(x => x==true).length;
}