function solution(a, b) {
        var ans = `${a}${b}` > `${b}${a}` || `${a}${b}` == `${b}${a}` ? `${a}${b}` : `${b}${a}`

        return Number(ans);
}