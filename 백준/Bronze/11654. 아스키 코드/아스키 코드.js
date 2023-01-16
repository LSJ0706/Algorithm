var input = require('fs').readFileSync('/dev/stdin').toString().trim();
var ascii = input.charCodeAt(0);
console.log(ascii);