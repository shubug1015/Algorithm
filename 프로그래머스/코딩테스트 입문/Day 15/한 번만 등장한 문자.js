// // 풀이 1
// function solution(s) {
//     let answer = '';    
    
//     for (const i of [...new Set(s)]) {             
//         let count = 0;
//         for (const j of s) {            
//             if (i === j) {                
//                 count++;
//             }
//         }
//         if (count === 1)
//             answer += i;        
//     }
    
//     return [...answer].sort().join('');
// }


// 풀이 2
function solution(s) {
    let answer = [];
    for (const c of s)
        if (s.indexOf(c) === s.lastIndexOf(c))
            answer.push(c);
    
    return answer.sort().join('');
}