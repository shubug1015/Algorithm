// // 풀이 1
// function solution(n) {
//     const sqrt = Math.sqrt(n);
//     const answer = (sqrt === Math.floor(sqrt) ? 1 : 2);
//     return answer;
// }

// 풀이 2
function solution(n) {
    const answer = Number.isInteger(Math.sqrt(n)) ? 1 : 2;
    return answer;
}