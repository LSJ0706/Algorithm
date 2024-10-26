function solution(nums) {
    const N = nums.length / 2;
    const set = new Set(nums);
    const setL = set.size;
    
    return N < setL ? N : setL;
}