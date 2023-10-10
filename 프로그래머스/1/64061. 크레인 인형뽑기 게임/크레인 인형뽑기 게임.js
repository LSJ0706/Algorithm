function solution(board, moves) {
    var stack = [];
    var answer = 0;
    moves.forEach((e) => {
        var row = 0;
        var col = e - 1;
        while (true) {
            if (row >= board.length) {
                row = 0;
                break;
                }   
            if (board[row][col] === 0) {
                row++;
            } else {
                stack.push(board[row][col]);
                board[row][col] = 0;
                break;
            }
        }
        if(stack[stack.length-1] === stack[stack.length-2] && stack.length>=2){
            stack.splice(stack.length-2, 2)
            answer++
        }
        
    })
    return answer*2;
}