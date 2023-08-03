function solution(my_string, queries) {
    var arr = [...my_string];

     for(let i=0; i< queries.length; i++) {
        arr = moveElement(arr, queries[i][0], queries[i][1])
        
    }
    return arr.join("");
}

const moveElement = (array, x, y) => {
    var result = array.splice(x,y-x+1).reverse();
    array.splice(x,0,...result)
    return array;
}