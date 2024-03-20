function solution(n) {
    const answer = [...Array(n)].map((_, index) => index + 1).reduce((acc, cur) => {
        if ((n % cur) === 0)
            acc = [...acc, cur];
        return acc;
    }, []);
    return answer;
}