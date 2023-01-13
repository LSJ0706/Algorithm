var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var t = parseInt(input[0]);

for (i=1; i<t + 1; i++){
    var cnt = 0;
    var sum = 0;
    var arr = [...input[i]]
    for (j=0; j<arr.length; j++)  {
        if (arr[j] === 'O') {
            cnt += 1;
            sum += cnt;
        }
        else {
            cnt = 0;
        }
    }
    console.log(sum);
}