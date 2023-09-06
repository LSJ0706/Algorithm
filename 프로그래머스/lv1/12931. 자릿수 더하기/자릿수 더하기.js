function solution(n)
{
    var answer = [...n.toString()].map(x => Number(x)).reduce((acc, cur) => acc +cur, 0)
    return answer;
}