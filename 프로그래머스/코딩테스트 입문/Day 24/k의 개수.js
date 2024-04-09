function solution(i, j, k) {
    let answer = 0;
    for (let a = i; a <= j; a++) {
        for (const b of [...String(a)]) {
            if (b === String(k)) {
                answer++;
            }
        }
    }
    return answer;
}