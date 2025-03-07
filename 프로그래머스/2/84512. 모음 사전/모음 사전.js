function solution(word) {
    const result = [];

    const DFS = (word, length, result) => {
        const gather = [..."AEIOU"];

        if(length === word.length) {
            result.push(word)
            return;
        }

        gather.forEach((e) => {
            DFS(word+e, length, result);
            });
        };

    for(let i=1; i<=5; i++) DFS("", i, result)
    return result.sort().indexOf(word) + 1;
}
