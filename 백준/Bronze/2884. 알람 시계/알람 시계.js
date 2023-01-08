var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');

var H = Number(input[0]);
var M = Number(input[1]);

M -= 45;

if (M < 0) {
    M += 60;
    H--;

    if(H === -1) {
        H = 23;
    }
}

console.log(H + ' ' + M);