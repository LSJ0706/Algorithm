var input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(x => Number(x));

for (var i = 0; i <= 30; i++) {
    if(!input.includes(i)) {
        console.log(i);
    }
}