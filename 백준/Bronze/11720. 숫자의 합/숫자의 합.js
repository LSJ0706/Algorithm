var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var num = input[1].split('').map(x => Number(x));
var sum = 0;

for (var i = 0; i < parseInt(input[0]); i++) {
    sum += num[i];
}
console.log(sum);
