var input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(x => Number(x));
console.log(Math.max(...input));
console.log(input.indexOf(Math.max(...input))+1);