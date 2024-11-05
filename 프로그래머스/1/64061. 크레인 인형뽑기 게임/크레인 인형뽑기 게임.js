function solution(board, moves) {
    let answer = 0;
    let stack = [];
    moves.forEach((v) => {
        let x = v-1;
        for(let i=0; i<board.length; i++) {
            if(board[i][x] === 0) continue;
            else {
                stack.push(board[i][x]);
                board[i][x] = 0;
                break;
            }
        }
        
        if(stack[stack.length-1] == stack[stack.length-2] && stack.length > 1) {
                answer++
                stack.pop();
                stack.pop();
        }
    })
    return answer*2;
}