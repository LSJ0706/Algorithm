var input = require('fs').readFileSync('/dev/stdin').toString().trim();
var alpha = 'abcdefghijklmnopqrstuvwxyz'
var alphaArr = alpha.split('');
var answer = [];
for (var i = 0; i<alphaArr.length; i++) {
    answer.push(input.indexOf(alphaArr[i]));
}

console.log(answer.join(' '));