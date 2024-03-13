function solution(numbers, k) {
    const index = ((k - 1) * 2) % numbers.length;
    const answer = numbers[index];
    return answer;
}