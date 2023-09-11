function solution(n) {
    return Number([...n.toString()].map(x=>Number(x)).sort((a,b) => b-a).join(""))
}