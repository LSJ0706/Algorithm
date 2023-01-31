var input = require('fs').readFileSync('/dev/stdin').toString().trim();
var cro = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
var cnt = 0;
for (var i=0; i<cro.length; i++) {
    while(input !== input.replace(cro[i], '')) {
        cnt +=1;
        input = input.replace(cro[i], ' ');
    }
}
console.log(cnt + input.split(' ').join('').length);