function solution(s) {
    if(s.length % 2 === 0) {
        var idx = s.length / 2
        return s.slice(idx-1,idx+1)
    }else{
        return s[Math.floor(s.length / 2)]
    }
}