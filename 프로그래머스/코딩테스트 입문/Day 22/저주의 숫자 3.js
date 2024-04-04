function solution(n) {
    const array = [...Array(n).keys()].map((v) => v + 1);
    const dp = array.reduce((acc, cur) => {
        let number;
        if (cur > 1) {
            number = acc[cur - 1] + 1;
            while (number % 3 === 0 || String(number).includes(3)) {
                number ++;
            }
            acc = [...acc, number];
        }
        return acc;
    }, [0, 1]);
    
    const answer = dp[n];
    return answer;
}