function solution(phone_book) {
    let answer = true;
    const phone_nums = phone_book.sort();
    for(let i=0; i<phone_nums.length; i++) {
        if(i === phone_nums.length-1) {
            answer = true;
            break;
        }
        if(phone_nums[i+1].startsWith(phone_nums[i])) {
            answer = false;
            break;
        }
    }
    return answer;
}