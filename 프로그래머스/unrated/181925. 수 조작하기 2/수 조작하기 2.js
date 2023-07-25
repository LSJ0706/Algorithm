function solution(numLog) {
    var answer = '';
    for(let i=0; i<numLog.length; i++) {
        var n = numLog[i+1] - numLog[i]
        switch(n) {
            case  1:
                answer +="w"
                break;
            case -1:
                answer +="s"
                break;
            case 10:
                answer +="d"
                break;
            case -10:
                answer +="a"
                break;
        }
    }
    return answer;
}