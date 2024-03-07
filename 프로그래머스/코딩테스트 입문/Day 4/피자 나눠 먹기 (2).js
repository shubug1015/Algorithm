const getPieceNum = (peopleNum, pizzaNum) => {
    if ((pizzaNum * 6) % peopleNum === 0)
        return pizzaNum;
    else
        return getPieceNum(peopleNum, pizzaNum + 1);
}

function solution(n) {
    const answer = getPieceNum(n, 1);
    return answer;
}