// // 풀이 1
// function solution(my_string, num1, num2) {
//     const string1 = my_string.slice(num1, num1 + 1);
//     const string2 = my_string.slice(num2, num2 + 1);
    
//     const answer = [
//         ...my_string.slice(0, num1),
//         ...string2,
//         ...my_string.slice(num1 + 1, num2),
//         ...string1,
//         ...my_string.slice(num2 + 1)
//     ].join('');
//     return answer;
// }

// 풀이 2
function solution(my_string, num1, num2) {
    my_string = [...my_string];
    [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
    return my_string.join('');
}