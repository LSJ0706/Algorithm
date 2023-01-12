var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var t = parseInt(input[0]);
var score = input[1].split(' ').map(x => Number(x));
var max = Math.max(...score);

for (var i = 0; i<t; i++) {
    score[i] = (score[i] / max) * 100;
}
var result = score.reduce(function add(sum, currValue) {
    return sum + currValue;
}, 0);

console.log(result/t);