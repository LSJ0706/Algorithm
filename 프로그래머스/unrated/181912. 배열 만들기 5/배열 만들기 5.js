function solution(intStrs, k, s, l) {
    var answer = [];
   arr = intStrs.map(x => Number([...x].splice(s,l).join("")));
   for(let i=0; i<arr.length; i++)  {
    k < arr[i] ? answer.push(arr[i]): 0;
   }
    return answer;
}