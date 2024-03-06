function solution(n) {
    const answer = [...Array(n + 1).keys()].filter(i => i % 2 !== 0);
    
    return answer;
}