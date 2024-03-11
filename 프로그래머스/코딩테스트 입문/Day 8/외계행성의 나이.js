function solution(age) {
    const alphabet = 'abcdefghij';
    
    let answer = '';
    for (let number of [...String(age)]) {
        answer += alphabet[number];
    }
    
    return answer;
}