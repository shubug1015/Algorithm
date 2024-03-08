function solution(my_string, n) {
    const answer = [...my_string].map(i => i.repeat(n)).join('');
    return answer;
}