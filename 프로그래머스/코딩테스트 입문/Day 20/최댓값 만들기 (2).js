// // 풀이 1
// function solution(numbers) {
//     let answer = [];
//     for (let i = 0; i < numbers.length - 1; i++) {
//         for (let j = i + 1; j < numbers.length; j++) {
//             answer.push(numbers[i] * numbers[j]);
//         }
//     }
//     return Math.max(...answer);
// }

// 풀이 2
function solution(numbers) {
    numbers.sort((a, b) => a - b);
    return Math.max(
        numbers[0] * numbers[1], 
        numbers[numbers.length - 1] * numbers[numbers.length - 2]
    );
}