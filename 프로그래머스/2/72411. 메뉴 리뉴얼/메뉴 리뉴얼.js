function combination (array, length) {
    const res = [];
    if(length === 1) return array.map((v) => [v]);
    
    array.forEach((v, idx, arr) => {
        const rest = arr.slice(idx+1);
        const combinations = combination(rest, length-1);
        const attach = combinations.map((combination) => [v,...combination]);
        res.push(...attach)
    })
    return res;
}

function solution(orders, course) {
    const answer = [];
    const obj = {};
    course.forEach((len) => {
        let max = 0;
        const result = {};
        
        orders.forEach((order) => {
            const combinations = combination([...order], len);
            combinations.forEach((combi) => {
                const menu = combi.sort().join("");
                if(result[menu]) {
                    result[menu] += 1;
                    max = max < result[menu] ? result[menu] : max;
                } else result[menu] = 1;
            });
        });
        if(max >= 2) {
            for(let [key, value] of Object.entries(result)) {
                if(max === value) answer.push(key);
            }
        }
    });
    return answer.sort();
}