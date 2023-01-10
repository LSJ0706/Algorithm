var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

var N = parseInt(input[0]);
var arr = input[1].split(' ').map(x => Number(x));
var ans = [];

ans.push(Math.min(...arr));
ans.push(Math.max(...arr));

console.log(ans.join(' '));