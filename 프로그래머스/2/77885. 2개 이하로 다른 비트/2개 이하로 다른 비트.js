function solution(numbers) {
    const answer = [];
    numbers.forEach((number) => {
        if(number % 2 === 0) {
            answer.push(number + 1);
        } else {
            const str = '0' + number.toString(2);
            for(let i=str.length-1; i>=0; i--) {
                if(str[i] === '0') {
                    const ans = str.substring(0,i) + "10" + str.substring(i+2,str.length);
                    answer.push(parseInt(ans, 2));
                    break;
                }
            }
        }

        
    })
    return answer;
}