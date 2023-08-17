function solution(arr, intervals) {
    var answer = arr.slice(intervals[0][0], intervals[0][1]+1).concat(arr.slice(intervals[1][0], intervals[1][1]+1));
    return answer;
}