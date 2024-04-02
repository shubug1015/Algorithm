function solution(sides) {
    sides.sort((a, b) => a - b);
    
    let answer = [];
    let i = 1;
    while (true) {
        if (i <= sides[1]) {
            if (sides[1] < i + sides[0]) {
                answer.push(i);
            }
        }
        if (i > sides[1]) {
            if (i < sides[0] + sides[1]) {
                answer.push(i)
            }
            if (i >= sides[0] + sides[1]) {
                break;
            }
        }        
        i++;
    }
    
    return answer.length;
}