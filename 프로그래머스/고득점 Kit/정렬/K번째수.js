function solution(array, commands) {
    let answer = [];
    
    for (const command of commands) {
        const [startIndex, endIndex, index] = command;
        
        answer.push(array
                    .slice(startIndex - 1, endIndex)
                    .sort((a, b) => a - b)[index - 1]
                   );
    }
    
    return answer;
}