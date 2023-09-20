function solution(numbers) {
    var stack = [];
    var answer = [];
    for(let i=0; i<numbers.length; i++) {
        for(let j=1; j<numbers.length; j++) {
            if(i != j) {
                var number = numbers[i] + numbers[j]
                if(!stack.includes(number)) {
                    stack.push(number)
                }
            }
            
        }
    }
     return stack.sort((a,b) => a-b);
}