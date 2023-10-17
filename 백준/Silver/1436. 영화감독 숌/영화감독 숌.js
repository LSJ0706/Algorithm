const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){
	var N = input[0]
    var count = 0;
    var number = 1;
    while(true) {
        var temp = number.toString().replace("666","*")
        if(temp.includes("*")) {
            count++
        }
        if(count === N) {
            console.log(number)
            break;
        }
        number++
        
    }
    process.exit();
});