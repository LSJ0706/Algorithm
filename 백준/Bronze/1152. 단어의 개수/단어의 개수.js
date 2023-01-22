var input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
var cnt = 0;
for (var i = 0; i<input.length; i++) {
    if (input[i] !== '') {
        cnt ++;
    }
}
console.log(cnt);