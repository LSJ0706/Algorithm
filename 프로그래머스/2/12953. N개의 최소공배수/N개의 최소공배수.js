function solution(arr) {
    var lcm = 1;
    arr.forEach((x) => {
        var tempLCM = 1
        while(true) {
            if(tempLCM % lcm === 0 && tempLCM % x ===0) {
                lcm = tempLCM
                break;
            }
            tempLCM++
        }
    })
    return lcm;
}