function solution(want, number, discount) {
    let answer = 0;
    const wantObj = want.reduce((acc,cur,idx) => {
        acc[cur] = number[idx];
        return acc;
    },{});
    
    for(let i=0; i<=discount.length-10; i++) {
        let flag = true;
        const slice = discount.slice(i,i+10);
        for(let goods of want) {
            if(wantObj[goods] != slice.filter(v => v === goods).length) {
                flag = false;
                break;
            }
        }
        if(flag) answer++;
    }
    return answer;
}