function solution(myString, pat) {
    myString = myString.toLowerCase();
    pat = pat.toLowerCase();
    return myString.includes(pat) ? 1 : 0;
}