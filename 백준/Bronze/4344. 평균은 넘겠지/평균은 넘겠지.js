var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var c = parseInt(input[0]);

for (var i=1; i<c+1; i++){
    var sum = 0;
    var cnt = 0;
    var arr = input[i].split(' ').map(x => Number(x));
    for (var j=1; j<arr[0]+1; j++) {
        sum += arr[j];
    }
    var avg = sum / arr[0];
    for (var k=1; k<arr[0]+1; k++) {
        if (arr[k] > avg) {
            cnt += 1;
        }
    }
    console.log(((cnt / arr[0])* 100).toFixed(3) + '%');
}