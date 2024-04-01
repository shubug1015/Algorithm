function solution(keyinput, board) {
    const answer = keyinput.reduce((acc, cur) => {
        if (cur === 'right') {
            if (acc[0] < Math.floor(board[0] / 2))
                acc[0]++;
        }
        if (cur === 'left') {
            if (acc[0] > -Math.floor(board[0] / 2))
                acc[0]--;
        }            
        if (cur === 'up') {
            if (acc[1] < Math.floor(board[1] / 2))
                acc[1]++;
        }
        if (cur === 'down') {
            if (acc[1] > -Math.floor(board[1] / 2))
                acc[1]--;
        }            
        return acc;
    }, [0, 0])
    return answer;
}