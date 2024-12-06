function solution(phone_book) {
    phone_book.sort();
    let answer = phone_book.some((v, idx) => {
        return idx+1 < phone_book.length && phone_book[idx+1].startsWith(v);
    });
    return !answer;
}