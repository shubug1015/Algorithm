function solution(array) {
    const answer = [...array.join('')].filter((v) => v === '7').length;
    return answer;
}