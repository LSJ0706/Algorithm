function solution(n, arr1, arr2) {
    const answer = [];
    arr1 = arr1.map((v) => v.toString(2).padStart(n,'0'));
    arr2 = arr2.map((v) => v.toString(2).padStart(n,'0'));
    for(let i=0; i<n; i++) {
        let map = '';
        for(let j=0; j<n; j++) {
            if (arr1[i][j] == 1 || arr2[i][j] == 1) map += '#'
            else map += ' '
        }
        answer.push(map)
    }
    return answer;
}