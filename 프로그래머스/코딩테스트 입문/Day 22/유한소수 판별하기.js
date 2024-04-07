const calculateGcd = (a, b) => {
    if (b === 0) 
        return a;
    else
        return calculateGcd(b, a % b);
}

const getDivisorList = (n) => {
    let divisorList = [];
    for (let i = 2; i <= n; i++) {
        if (n % i === 0) {
            divisorList.push(i);
        }
    }
    return divisorList
}

function solution(a, b) {
    const n = b / calculateGcd(a, b);

    let answer = 1;
    for(const divisor of getDivisorList(n)) {
        if (divisor % 2 !== 0 && divisor % 5 !== 0) {
            answer = 2;
            break;
        }
    }
    
    return answer;
}