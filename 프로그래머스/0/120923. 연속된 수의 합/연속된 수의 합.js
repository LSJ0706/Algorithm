function solution(num, total) {
    let answer = Array.from(new Array(num), ((x,i) => i+1));
    
    while(true) {
        const sum = answer.reduce((acc, cur) => {
        acc += cur
        return acc;
        },0);

        if(sum < total) {
            answer = answer.map((v) => {
                v++
                return v;
            })
        }else if(sum > total){
            answer = answer.map((v) => {
                v--
                return v;
            })
        }else {
            break;
        }
    }
    return answer;
}