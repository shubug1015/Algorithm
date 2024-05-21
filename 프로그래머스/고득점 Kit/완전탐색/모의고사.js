function solution(answers) {
    const pattern1 = [1, 2, 3, 4, 5],
          pattern2 = [2, 1, 2, 3, 2, 4, 2, 5],
          pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let countList = [0, 0, 0];
        
    answers.map((answer, index) => {
        if (answer === pattern1[index % 5]) {
            countList[0] += 1;
        }
        if (answer === pattern2[index % 8]) {
            countList[1] += 1;
        }
        if (answer === pattern3[index % 10]) {
            countList[2] += 1;
        }
    })
    
    const maxCountList = countList.reduce((acc, cur, idx) => {
        if (cur === Math.max(...countList)) {
            return [...acc, idx + 1];
        } else {
            return acc;
        }
    }, [])
    
    return maxCountList.sort((a, b) => a - b);
}