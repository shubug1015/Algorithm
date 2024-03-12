const factorial = (n) => {
    if (n === 0)
        return 1;
    return n * factorial(n - 1);
}

function solution(balls, share) {
    const answer = Math.round(
        factorial(balls) / (factorial(balls - share) * factorial(share))
    );
    return answer;
}