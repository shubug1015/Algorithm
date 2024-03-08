// 유클리드 호제법을 이용함 최대공약수(GCD) 계산
const calculateGcd = (a, b) => {
    if (b === 0) 
        return a;
    else
        return calculateGcd(b, a % b);
}

function solution(numer1, denom1, numer2, denom2) {
    const numer = (numer1 * denom2) + (numer2 * denom1);
    const denom = denom1 * denom2;
    const gcd = calculateGcd(numer, denom);
    
    const answer = [numer / gcd, denom / gcd];
    return answer;
}