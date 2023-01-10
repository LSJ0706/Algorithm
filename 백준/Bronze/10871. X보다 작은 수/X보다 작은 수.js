var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

var N = input[0].split(' ').map(x => Number(x));
var X = input[1].split(' ').map(x => Number(x));
var arr = [];

for(var i = 0; i < N[0]; i++) {
    if (N[1] > X[i]) {
        arr.push(X[i]);
    }
}

console.log(arr.join(' '));