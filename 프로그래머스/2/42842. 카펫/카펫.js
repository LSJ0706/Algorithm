function solution(brown, yellow) {
    let yellowGCD = [];
    for(let i=1; i<=Math.sqrt(yellow); i++) {
        if(yellow%i === 0) {
            yellowGCD.push(i);
            yellowGCD.push(yellow/i);
        }
    }
    yellowGCD = yellowGCD.sort((a,b) => a-b);
    let [left, right] = [0, yellowGCD.length-1];
    for(let i=0; i<yellowGCD.length/2; i++) {
        if((yellowGCD[left]+2)*(yellowGCD[right]+2) === brown+yellow) break;
        else {
            left++;
            right--;
        }
    }
    return [yellowGCD[right]+2, yellowGCD[left]+2];
}