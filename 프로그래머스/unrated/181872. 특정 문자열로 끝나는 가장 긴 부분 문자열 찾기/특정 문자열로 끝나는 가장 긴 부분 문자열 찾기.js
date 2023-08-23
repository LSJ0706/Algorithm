function solution(myString, pat) {
    myString = [...myString];
     while(true) {
        if(JSON.stringify(myString.slice(-pat.length)) == JSON.stringify([...pat])) {
            return myString.join("");
        }
        myString.pop();
    }
}