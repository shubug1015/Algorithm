function solution(numbers) {
    numbers.sort((a, b) => {
        if (`${a}${a}${a}` > `${b}${b}${b}`) {
            return -1;
        }
        
        if (`${a}${a}${a}` < `${b}${b}${b}`) {
            return 1;
        }
        
        return 0;
    });
    
    const answer = numbers[0] === 0 ? '0' : numbers.join('');
    
    return answer;
}