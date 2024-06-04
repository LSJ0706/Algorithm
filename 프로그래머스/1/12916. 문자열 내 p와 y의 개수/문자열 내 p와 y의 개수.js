function solution(s){
    s = s.toLowerCase();
    let answer = true;
    let sc1 = s.split("").filter(v  => v == 'p');
    let sc2 = s.split("").filter(v  => v == 'y');
    return sc1.length == sc2.length ? answer : !answer;
}