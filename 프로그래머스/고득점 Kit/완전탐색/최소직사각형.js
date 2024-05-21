function solution(sizes) {
    const sizeList = sizes.map((size) => size.sort((a, b) => b - a));
    
    let widthList = [],
        heightList = [];
    
    sizeList.map(([width, height]) => {
        widthList.push(width);
        heightList.push(height);
    })

    return Math.max(...widthList) * Math.max(...heightList);
}