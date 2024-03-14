function factorial (n) {
    if (n <= 1)
        return 1;
    return n * factorial(n - 1);
}

function solution(n) {
    let answer = 1;
    
    while (factorial(answer) <= n) {
        answer += 1;
    }
    
    return answer - 1;
}