// // 풀이 1
// function solution(score) {
//     const averageList = score.map(([a, b], idx) => ({
//         id: idx,
//         score: (a + b) / 2
//     }));
//     averageList.sort((a, b) => b.score - a.score);
    
//     const answer = [...Array(score.length)];
//     let rank = 1;
//     let count = 1;
//     for (let i = 0; i < averageList.length; i++) {
//         const currentId = averageList[i].id;
//         const currentScore = averageList[i].score;
//         answer[currentId] = rank;
        
//         if (i < averageList.length - 1) {
//             if (currentScore !== averageList[i + 1].score) {
//                 rank += count;
//                 count = 1;
//             }
//             if (currentScore === averageList[i + 1].score) {
//                 count++;
//             }
//         }        
//     };
    
//     return answer;
// }

// 풀이 2
function solution(score) {
    const answer = score.map(([a, b]) => {
        return (
            score.filter(([c, d]) => (c + d) / 2 > (a + b) / 2).length + 1
        );
    });
    return answer;
}