function solution(array) {
    const maxNumber = Math.max(...array);
    const countArray = array.reduce((accumulator, number) => {
        accumulator[number]++;
        return accumulator;
    }, new Array(maxNumber + 1).fill(0));
    
    console.log(countArray)
    
    const maxCountValue = Math.max(...countArray);
    const multipleCount = countArray.reduce((totalCount, count) => {
        if(maxCountValue === count)
            totalCount++;
        return totalCount;
    }, 0);
    
    if(multipleCount < 2)
        return countArray.indexOf(maxCountValue);
    else
        return -1;
}