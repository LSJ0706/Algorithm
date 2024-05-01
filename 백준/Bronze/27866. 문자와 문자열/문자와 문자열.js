let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const S = input[0];
const i = Number(input[1]);

console.log(S[i-1]);