function solution(cacheSize, cities) {
    const cache = new Array(cacheSize);
    let answer = 0;
    cities.map(v => v.toLowerCase()).forEach((v) => {
        if(cache.indexOf(v) === -1) {
            answer += 5;
            cache.push(v);
            if(cache.length > cacheSize) {
                cache.shift();
            }
        } else {
            answer += 1;
            const idx = cache.indexOf(v);
            cache.splice(idx,1);
            cache.push(v);
        }
    });
    
    return answer;
}