function solution(array) {
    const middleIndex = Math.ceil(array.length / 2) - 1;
    const sortedArray = array.sort((a, b) => a - b);
    
    const answer = sortedArray[middleIndex];
    return answer;
}