function solution(num, k) {
    const index = [...String(num)].indexOf(String(k));
    const answer = index === -1 ? -1 : index + 1;
    return answer;
}