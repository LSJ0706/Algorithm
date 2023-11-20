function solution(phone_book) {
    var answer = true;
    const phoneObj = {}
    phone_book.forEach((phoneNum) => {
        phoneObj[phoneNum] = true
    })
    for(const phoneNum of phone_book) {
        for(let i=1; i<phoneNum.length; i++) {
            const curStr = phoneNum.slice(0, i)
            if(phoneObj[curStr]) return false
        }
    }
    return answer;
}