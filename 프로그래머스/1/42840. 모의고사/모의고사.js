function solution(answers) {
    const answer = [0, 0, 0];
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    answers.forEach((v,i) => {
        if (arr1[i % arr1.length] == v) answer[0]++
        if (arr2[i % arr2.length] == v) answer[1]++
        if (arr3[i % arr3.length] == v) answer[2]++
    })
    
    const max = Math.max(...answer);
    
    return answer.reduce((acc, cur, idx) => {
        if(cur == max) acc.push(idx+1);
        return acc;
    },[]);
}