function solution(numbers) {
    const totalValue = numbers.reduce((acc, cur) =>
        acc += cur, 0);
    const answer = totalValue / numbers.length;
    return answer;
}