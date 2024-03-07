function solution(money) {
    const americanoNum = Math.floor(money / 5500);
    const restMoney = money % 5500;
    const answer = [americanoNum, restMoney];
    return answer;
}