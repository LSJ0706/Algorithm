function solution(my_string, s, e) {
    var array = [...my_string]
    var temp = array.slice(s,e+1).reverse();
    array.splice(s,e-s+1,...temp);;
    
    return array.join("");
}