var input = require('fs').readFileSync('/dev/stdin').toString().trim();

var ans = new Array(26).fill(0);
var alpha = input.toUpperCase();

for (var i = 0; i < alpha.length; i++) {
    ans[alpha.charCodeAt(i) - 65] ++;
}

var maxWord = Math.max(...ans);
var maxIndex = ans.indexOf(maxWord);

console.log(maxIndex === ans.lastIndexOf(maxWord) ? String.fromCharCode(maxIndex + 65) : '?');