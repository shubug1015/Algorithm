// // 풀이 1
// function solution(my_string) {
//     let numberList = [];
//     const number = [...my_string].reduce((acc, cur, idx, arr) => {
//         if (isNaN(Number(cur))) {
//             if (acc) {
//                 numberList.push(acc);
//                 acc = '';
//             }
//             return acc;
//         }
//         if (!isNaN(Number(cur))) {
//             acc += cur;
//             if (idx === arr.length - 1) {
//                 numberList.push(acc);
//                 acc = '';
//             }
//             return acc;
//         }
//     }, '');
    
//     const answer = numberList.reduce((acc, cur) => {
//         acc += Number(cur);
//         return acc;
//     }, 0);
    
//     return answer;
// }

// 풀이 2
function solution(my_string) {
    const answer = my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
    return answer;
}