const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
let answer = 1;
for(let i=0; i<Math.floor(input.length/2); i++) {
    if(input[i] != input.at(-(i+1))) {
        answer = 0;
        break;
    }
}
console.log(answer);