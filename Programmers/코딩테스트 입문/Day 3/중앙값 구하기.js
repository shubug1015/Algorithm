function solution(array) {
    const mid = Math.floor(array.length / 2);
    
    array.sort(function(a, b) {
        return a - b;
    });
   
    const answer = array[mid];

    return answer;
}