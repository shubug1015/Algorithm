function solution(quiz) {
    const answer = quiz.map((v) => {
        const [x, op, y, _, z] = v.split(' ');
        
        if (op === '+') {
            return Number(x) + Number(y) === Number(z) ? 'O' : 'X';
        }
        if (op === '-') {
            return Number(x) - Number(y) === Number(z) ? 'O' : 'X';
        }
    });
    return answer;
}