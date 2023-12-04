// 최대 공약수 구하기
function calGCD(a, b) {
    return a % b === 0 ? b : calGCD(b, a % b)
}

function solution(numer1, denom1, numer2, denom2) {
    let numer = numer1 * denom2 + numer2 * denom1;
    let denom = denom1 * denom2;
    let gcd = calGCD(numer, denom);
    
    // 최대 공약수를 분자 분모에 나누고 배열에 넣기
    return [numer / gcd, denom / gcd]
}