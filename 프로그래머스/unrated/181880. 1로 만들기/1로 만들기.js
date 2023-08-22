function solution(num_list) {
    const one = (num, ans) => {
        if(num != 1) {
            if(num % 2 ==0){
                num = num/2;
                ans ++;
            }
            else if(num % 2 !=0){
                num = (num-1)/2;
                ans ++;
            }
            return one(num, ans);
        }
        return ans;
    }
    var answer = 0;

    num_list.map((x) => {
        answer = one(x, answer);
    })
    return answer;
}