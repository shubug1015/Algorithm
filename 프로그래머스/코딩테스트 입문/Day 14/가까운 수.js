function solution(array, n) {
    // const answer = array.reduce((acc, cur) => {
    //     if (Math.abs(cur - n) < acc.difference) {
    //         acc.difference = Math.abs(cur - n);
    //         acc.result = cur;
    //     } else if (Math.abs(cur - n) === acc.difference) {
    //         if (cur < acc.result) {
    //             acc.result = cur;
    //         }
    //     }
    //     return acc;
    // }, {difference: 101, result: 101});
    //
    // return answer.result;
    
    const answer = array.sort((a,b) => Math.abs(n - a) - Math.abs(n - b) || a - b)[0];
    
    return answer;
}