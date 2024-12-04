function solution(k, tangerine) {
    let answer = 0;
    let cnt = 0;
    const tangerObj = tangerine.reduce((acc,cur) => {
        if(acc[cur] === undefined) acc[cur] = 1;
        else acc[cur]++;
        return acc;
    },{});
    const arr = Object.values(tangerObj).sort((a,b) => b-a);
    for(let i=0; i<arr.length; i++) {
        if(cnt >= k) {
            break;
        }else {
            cnt += arr[i];
            answer++;
        }
    }
    return answer;
}