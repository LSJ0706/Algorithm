function solution(array, commands) {
    const answer = [];
    commands.forEach(([i, j, k]) => {
        const temp = array.slice(i-1,j);
        answer.push(temp.sort((a,b) => a-b)[k-1]);
    })
    return answer;
}