var fs = require('fs');
var input = Number(fs.readFileSync('/dev/stdin').toString().trim());

var num = input;
var t;
var cnt = 0;

while (true){
    cnt ++;

    t = parseInt(num/10) + num % 10;
    num = (num % 10) * 10 + t % 10; 

    if (num === input){
        break;
    }
}

console.log(cnt);