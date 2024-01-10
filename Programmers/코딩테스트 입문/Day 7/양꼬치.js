function solution(n, k) {
    const serviceNumber = Math.floor(n / 10);
    const answer = (n * 12000) + ((k - serviceNumber) * 2000);
    return answer;
}