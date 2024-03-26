// // 풀이 1
// function solution(n, t) {
//     let answer = n;
//     for (let i = 1; i <= t; i++) {
//         answer *= 2;
//     }
//     return answer;
// }

// // 풀이 2
// function solution(n, t) {
//     const answer = n * Math.pow(2, t);
//     return answer;
// }

// 풀이 3
function solution(n, t) {
    return n << t;
  }