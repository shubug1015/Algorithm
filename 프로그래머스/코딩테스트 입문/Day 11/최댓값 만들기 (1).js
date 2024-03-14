function solution(numbers) {
    const sortedNumbers = numbers.sort((a, b) => b - a);
    const answer = sortedNumbers[0] * sortedNumbers[1];
    return answer;
}