function solution(dots) {
    const [
        [x1, y1],
        [x2, y2],
        [x3, y3],
        [x4, y4]
    ] = dots;
    
    // 1-2 / 3-4
    // 1-3 / 2-4
    // 1-4 / 2-3
    let answer = 0;
    if ((y1 - y2) / (x1 - x2) === (y3 - y4) / (x3 - x4)) {
        answer = 1;
    }
    if ((y1 - y3) / (x1 - x3) === (y2 - y4) / (x2 - x4)) {
        answer = 1;
    }
    if ((y1 - y4) / (x1 - x4) === (y2 - y3) / (x2 - x3)) {
        answer = 1;
    }

    return answer;
}