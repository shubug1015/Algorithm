function solution(dots) {
    const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots;
    
    const xMin = Math.min(x1, x2, x3, x4);
    const xMax = Math.max(x1, x2, x3, x4);
    const yMin = Math.min(y1, y2, y3, y4);
    const yMax = Math.max(y1, y2, y3, y4);
    
    const width = xMax - xMin;
    const height = yMax - yMin;
    
    const answer = width * height;

    return answer;
}