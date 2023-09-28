

function solution(dots) {
    var answer =0;
    const inclination = (dot1, dot2, dot3, dot4) => {
    var diff1 = (dot2[1] - dot1[1])/(dot2[0] - dot1[0])
    var diff2 = (dot4[1] - dot3[1])/(dot4[0] - dot3[0])
    if (diff1 === diff2) answer += 1
}
    inclination(dots[0], dots[1], dots[2], dots[3])
    inclination(dots[0], dots[2], dots[1], dots[3])
    inclination(dots[0], dots[3], dots[1], dots[2])
    return answer === 0 ? 0 : 1;
}