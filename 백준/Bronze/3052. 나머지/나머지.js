var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var remainder = new Set(input.map(x => x % 42)).size;
console.log(remainder);