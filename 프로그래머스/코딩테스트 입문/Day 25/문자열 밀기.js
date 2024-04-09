// // 풀이 1
// function solution(A, B) {
//     let string = A;
//     let answer = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (string === B) {
//             break;
//         }
//         string = string[string.length - 1] + string.slice(0, string.length - 1);
//         answer++;
//     }
//     if (string !== B) {
//         answer = -1;
//     }
//     return answer;
// }

// 풀이 2
function solution(A, B) {
    return (B + B).indexOf(A);
}