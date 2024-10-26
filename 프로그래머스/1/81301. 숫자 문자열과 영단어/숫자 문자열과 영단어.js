function solution(s) {
    const answer = [];
    const number = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let string = '';
    [...s].forEach((v) => {
        if(!isNaN(v)) {
            answer.push(v);
        } else {
            string += v;
            console.log(string)
            if(number.includes(string)) {
                answer.push(number.indexOf(string));
                string = '';
            }
        }
    })
    
    return parseInt(answer.join(''));
}