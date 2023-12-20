function solution(skill, skill_trees) {
    let answer = 0;
    const arr = [];
    skill = skill.split("")
    skill_trees.forEach((tree) => {
        let str = ""
        for(let i=0; i<tree.length; i++) {
            if(skill.includes(tree[i])) {
               str += tree[i] 
            }
        }
        arr.push(str)
    });
    for(let i=0; i<arr.length; i++) {
        let flag = true;
        for(let j=0; j<arr[i].length; j++) {
            if(skill[j] !== arr[i][j]) {
                flag = false;
            }
        }
        if(flag) answer++
    }
    return answer;
}