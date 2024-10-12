function solution(babbling) {
    let answer = 0;
    const possible = ["aya", "ye", "woo", "ma"]
    babbling.map((word) => {
        possible.forEach((babble) => {
            word = word.replaceAll(babble, "k")
        })
        if(word.replaceAll("k", "") === "") answer++
        return word
    })
    return answer;
}