function solution(n) {
    const answer = [...String(n)].reduce((acc, cur) => {
        acc += String(cur);
        return acc;
    }, 0);
    return answer;
}