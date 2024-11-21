function solution(cacheSize, cities) {
    cities = cities.map((x) => x.toLowerCase())
    var answer = 0;
    var stack = [];
    cities.forEach((e) => {
        if(!stack.includes(e)) {
            answer += 5
            stack.push(e)
            if(stack.length > cacheSize) {
                stack.shift();
            }
        }else {
            answer++;
            let idx = stack.indexOf(e)
            stack.splice(idx,1)
            stack.push(e)
        }
    })
    return answer;
}