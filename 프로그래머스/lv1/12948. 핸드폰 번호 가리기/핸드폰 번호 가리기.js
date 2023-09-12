function solution(phone_number) {
    var char = "*".repeat(phone_number.length-4) + phone_number.slice(-4) 
    return char;
}