function solution(str_list) {
    var answer = [];
    var idx = 0;

    for(let i=0; i<str_list.length; i++) {
        if(str_list[i] == "l") {
            idx = str_list.indexOf("l");
            answer = str_list.splice(0,idx);
            break;
        }else if(str_list[i] == "r") {
            idx = str_list.indexOf("r");
            answer = str_list.splice(idx+1);
            break;
        }
    }
    return answer;
}