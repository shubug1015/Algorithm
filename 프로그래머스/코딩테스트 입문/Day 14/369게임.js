function solution(order) {
    const answer = [...String(order)].reduce((acc, cur) => {
        if (cur === '3' || cur === '6' || cur === '9')
            acc += 1;
        return acc;
    }, 0);
    return answer;
}