function solution(my_string, indices) {
    my_string = [...my_string]

    for (let i=0; i<indices.length; i++) {
       my_string.splice(indices[i],1,"");
    }
    return my_string.join("");
}