function solution(my_string, n) {
    const answer = [...my_string].map((string) => string.repeat(n)).join(''); 
    return answer;
}