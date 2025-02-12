function solution(want, number, discount) {
    let answer = 0;
    const wantObj = want.reduce((acc,cur,idx) => {
        acc.set(cur,number[idx]);
        return acc
    },new Map());
    for(let i=0; i<=discount.length-10; i++) {
        let arr = discount.slice(i,i+10);
        for(let item of wantObj.keys()) {
            if(arr.filter(v => v === item).length === wantObj.get(item)) {
                arr = arr.filter(v=> v!==item);
            }else {
                break;
            }
        }
        arr.length === 0 ? answer++ : answer
    }
    return answer;
}