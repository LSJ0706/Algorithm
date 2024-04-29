let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let num = Number(input)

console.log('long '.repeat(Math.floor(num/4)) + 'int')