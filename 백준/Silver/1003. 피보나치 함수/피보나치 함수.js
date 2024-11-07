const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line);
}).on('close', function(){
    let T = parseInt(input[0]);
    for(let i=1; i<=T; i++) {
        const fibo = [[1,0], [0,1]];
        let num = parseInt(input[i]);
        for(let j=2; j<=num; j++) {
            fibo[j] = [fibo[j-2][0]+fibo[j-1][0], fibo[j-2][1]+fibo[j-1][1]];
        }
        console.log(fibo[num].join(" "));
    }
    process.exit();
});