var input = require('fs').readFileSync('/dev/stdin').toString().trim();

function d(n) {
    var cnt = 0;
    for (var i = 1; i < n+1; i++) {
        if (i < 100) {
            cnt++;
        }
        else {
            var num = i.toString();
            var h = num.split('').map(x => Number(x));
            if ((h[0] - h[1]) === (h[1] - h[2])) {
                cnt++;
            }
        }

    }
    return(console.log(cnt));
    
}
d(parseInt(input));