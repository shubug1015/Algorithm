function solution(array) {
    const maxNumber = Math.max(...array);
    const countArray = array.reduce((acc, cur) => {
        acc[cur]++;
        return acc;
    }, new Array(maxNumber + 1).fill(0));
    
    const maxCountValue = Math.max(...countArray);
    const multipleCount = countArray.reduce((acc, cur) => {
        if (maxCountValue === cur)
            acc++;
        return acc;
    }, 0);
    
    if (multipleCount < 2)
        return countArray.indexOf(maxCountValue);
    else
        return -1;
}