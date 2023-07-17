function solution(str1, str2) {
    var ans = [];
        for (let i = 0; i< str1.length; i++){
                ans.push(str1[i]+str2[i]);
        }
    return ans.join('');
}