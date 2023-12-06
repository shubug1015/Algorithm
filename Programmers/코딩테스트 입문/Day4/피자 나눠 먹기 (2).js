function getPiece(people, piece) {
    return (6 * piece) % people === 0 ? piece : getPiece(people, piece + 1);
}

function solution(n) {    
    const answer = getPiece(n, 1);
    return answer;
}