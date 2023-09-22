function solution(nums) {
    var setPoket = new Set(nums);
    if(nums.length/2 >= [...setPoket].length) {
        return [...setPoket].length;
    }else {
        return nums.length/2
    }
}