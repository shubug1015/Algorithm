function solution(numbers, direction) {
    // // 풀이 1
    // const length = numbers.length;
    // if (direction === 'right')
    //     return [numbers[length - 1], ...numbers.slice(0, length - 1)];
    // else
    //     return [...numbers.slice(1, length), numbers[0]];
    
    // 풀이 2
    if (direction === 'right') {
        const number = numbers.pop()
        return [number, ...numbers];
    } else {
        const number = numbers.shift()
        return [...numbers, number];
    }  
}