function solution(numbers, hand) {
    var pad = {
        1: [0,0], 2: [0,1], 3: [0,2],
        4: [1,0], 5: [1,1], 6: [1,2],
        7: [2,0], 8: [2,1], 9: [2,2],
        '*': [3,0], 0: [3,1], '#': [3,2]
    }
    var [lH, rH] = ['*','#']
    const nearHand = (num,l,r,hand) => {
        var lDis = Math.abs(pad[num][0] - pad[l][0]) +  Math.abs(pad[num][1] - pad[l][1])
        var rDis = Math.abs(pad[num][0] - pad[r][0]) +  Math.abs(pad[num][1] - pad[r][1])
        if(lDis > rDis) {
            return 'R'
        }else if (lDis < rDis) {
            return 'L'
        }else {
            return hand === 'right' ? 'R' : 'L'
        }
    }
    
    var answer = '';
    numbers.forEach((e) => {
        if(e === 1 || e === 4 || e === 7) {
            answer += 'L'
            lH = e
        }else if (e === 3 || e === 6 || e === 9){
            answer += 'R'
            rH = e
        }else {
            if(nearHand(e,lH,rH,hand) === 'L') {
                answer += 'L'
                lH = e
            }else {
                answer += 'R'
                rH = e
            }
        }
        console.log(lH, rH)
    })
    return answer;
}