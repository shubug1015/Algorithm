function solution(s1, s2) {
    const answer = s1.filter((v) => s2.includes(v)).length;
    return answer;
}