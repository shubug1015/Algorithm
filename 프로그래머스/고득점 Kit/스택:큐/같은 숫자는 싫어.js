function solution(arr) {
    let answer = [];
    
    for (const a of arr) {
        if (answer[answer.length - 1] !== a) {
            answer.push(a);
        }
    }
    
    return answer;
}