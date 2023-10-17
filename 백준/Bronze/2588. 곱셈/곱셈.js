const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const x = parseInt(input[0]);
const y = parseInt(input[1]);

console.log(x*(y%10));
console.log(x*parseInt((y%100)/10));
console.log(x*parseInt(y/100));
console.log(x*y);