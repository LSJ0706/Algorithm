function solution(my_string, overwrite_string, s) {
    var ans = [...my_string];
    ans.splice(s, overwrite_string.length, ...overwrite_string);
    return ans.join('');
}