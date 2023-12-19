function solution(money) {
    const cup = Math.floor(money / 5500);
    const change = money % 5500;
    const answer = [cup, change];
    return answer;
}