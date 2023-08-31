function solution(num_str) {
    
    return [...num_str].map(x=>parseInt(x)).reduce((acc,cur) => acc+cur);
}