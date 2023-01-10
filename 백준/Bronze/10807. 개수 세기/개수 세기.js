var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

var N = parseInt(input[0]);
var arr = input[1].split(' ');
var v = parseInt(input[2]);
var cnt = 0;

for (i = 0; i<N; i++) {
    if (parseInt(arr[i]) === v) {
        cnt++;
    }
}

console.log(cnt)