function solution(arr) {
    var arr1 = arr;
  var answer = 0;

  while (true) {
    var arr2 = arr1.map((x) => {
        if (x >= 50 && x % 2 == 0) return x / 2
        else if (x < 50 && x % 2 != 0) return x * 2 + 1
        return x
      });
      if(JSON.stringify(arr1) === JSON.stringify(arr2)) break;
    answer++
    arr1 = arr2;
  }
  console.log(answer)
  return answer;
}