function solution(n, k) {
    const serviceNum = Math.floor(n / 10);
    const answer = (n * 12000) + ((k - serviceNum) * 2000);
    return answer;
}