var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var X = parseInt(input[0]);
var N = parseInt(input[1]);
var sum = 0;

for (i=2; i<N+2; i++){
    var cash = input[i].split(' ');
    var a = cash[0];
    var b = cash[1];
    sum += a*b;
}

if (X === sum) {
    console.log('Yes');
}
else {
    console.log('No');
}