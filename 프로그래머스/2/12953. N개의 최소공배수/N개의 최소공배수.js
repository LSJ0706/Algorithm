function solution(arr) {
    let answer = 0;
    let num = arr[0]
    for(let i=1; i<arr.length; i++) {
        let GCD = calGCD(num,arr[i]);
        let LCM = (num * arr[i]) / GCD;
        num = LCM;
    }
    return num;
}
function calGCD(x,y) {
    if(x%y != 0) {
        return calGCD(y, x%y)
    }else if(x%y === 0){
        return y
    }
}