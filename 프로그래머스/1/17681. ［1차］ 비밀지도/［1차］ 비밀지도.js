function solution(n, arr1, arr2) {
    const answer = [];
    arr1 = arr1.map((v) => v.toString(2).padStart(n,0));
    arr2 = arr2.map((v) => v.toString(2).padStart(n,0));
    for(let i=0; i<arr1.length; i++) {
        let temp = "";
        for(let j=0; j<n; j++) {
            temp += parseInt(arr1[i][j]) + parseInt(arr2[i][j]) < 1 ? " " : "#"
        }
        answer.push(temp);
    }
    return answer;
}