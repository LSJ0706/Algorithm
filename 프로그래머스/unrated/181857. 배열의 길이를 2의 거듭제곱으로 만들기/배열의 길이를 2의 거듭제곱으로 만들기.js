function solution(arr) {
        var pow = 0;
    while(true) {
        if(2**pow == arr.length) break;
        if(2**pow < arr.length) pow++
        if(2**pow > arr.length) arr.push(0);
    }
    return arr;
}