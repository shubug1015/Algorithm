function solution(array) {
    const maxNumber = Math.max(...array);
    const answer = [maxNumber, array.indexOf(maxNumber)];
    return answer;
}