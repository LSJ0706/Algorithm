var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

var num1 = input.shift();

for (var i = 0; i < num1; i++) {
    var answer = '';
    
    var [num2, str] = input[i].split(" ");
    
    for (var j = 0; j < str.length; j++) {
        for (var k = 0; k < num2; k++) {
            answer += str[j];
  	}
    }
    
    console.log(answer);
}