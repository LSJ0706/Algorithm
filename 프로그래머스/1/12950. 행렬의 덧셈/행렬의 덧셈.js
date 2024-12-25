function solution(arr1, arr2) {
    const answer = arr1.map((v,idx1) => {
        return v.map((el, idx2) => {
            el += arr2[idx1][idx2]
            return el;
        });
    });
    return answer;
}