function solution(numbers) {
    var answer = [];
    for(let i = 0; i<numbers.length; i++) {
        if(numbers[i] % 2 == 0) {
            answer.push(numbers[i] + 1);
        }else {
            const num = "0" + numbers[i].toString(2);
            for(let j = num.length - 1; j >= 0; j--) {
                if(num[j] == 0) {
                    answer.push(parseInt(num.substring(0, j) + "10" + num.substring(j+2,num.length),2))
                    break;
                } 
            }
        }
    }
    return answer;
}