function solution(dots) {
    let answer = 0;
    const [dot1, dot2, dot3, dot4] = dots
    
    if(Math.abs(dot1[0]-dot2[0])/Math.abs(dot1[1]-dot2[1]) == Math.abs(dot3[0]-dot4[0])/Math.abs(dot3[1]-dot4[1])) answer=1
    if(Math.abs(dot1[0]-dot3[0])/Math.abs(dot1[1]-dot3[1]) == Math.abs(dot2[0]-dot4[0])/Math.abs(dot2[1]-dot4[1])) answer=1
    if(Math.abs(dot1[0]-dot4[0])/Math.abs(dot1[1]-dot4[1]) == Math.abs(dot2[0]-dot3[0])/Math.abs(dot2[1]-dot3[1])) answer=1
    
    return answer;
}