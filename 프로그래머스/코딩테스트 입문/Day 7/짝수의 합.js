function solution(n) {
    const half = Math.floor(n / 2);
    const answer = half * (half + 1);
    return answer;
}