var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var T = parseInt(input[0]);
var room;
for(var i=1; i<T+1; i++) {
    var hotel = input[i].split(' ').map(x => Number(x));
    var h = hotel[2] % hotel[0];
    var w = parseInt(hotel[2] / hotel[0]) + 1;

    if (h === 0) {
        room = hotel[0]*100 + w-1;
    }else {
        room = h*100 + w;
    }
    console.log(room);
}
