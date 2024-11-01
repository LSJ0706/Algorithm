function solution(s) {
    let same = 0;
    let diff = 0;
    let str = '';
    let answer = 0;
    
    for(let i=0; i<s.length; i++) {
        str += s[i]
        if(str[0] != s[i]) diff++
        else same++
        
        if(same === diff) {
            answer++
            same = 0;
            diff = 0;
            str = '';
        }
        
        if(same != diff && i+1 === s.length) answer++
    }
    return answer;
}