function solution(numbers) {
    const answer = [];
    numbers.forEach((v) => {
        if(v ===1 || v % 2 ===0) {
            answer.push(v+1);
        }else {
            const odd = "0" + v.toString(2);
            const len = odd.length;
            for(let i=len-1; i>0; i--) {
                if(odd[i-1] + odd[i] === "01") {
                    answer.push(parseInt((odd.slice(0,i-1) + "10" + odd.slice(i+1,len)),2))
                    break;
                }
            }
        }
    })
    return answer;
}