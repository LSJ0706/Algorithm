function solution(input) {
	console.log(input.reduce((acc,cur) => acc + cur));
}
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input;
let list = [];
rl.on("line", function (line) {
    input = line; // 입력받은 문자열, line
    rl.close();   // 입력 종료
}).on("close", function () {
    list = input.split(' ').map((el) => Number(el));
    solution(list);
    process.exit();
});