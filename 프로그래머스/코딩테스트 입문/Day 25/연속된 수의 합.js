function solution(num, total) {
    const numberList = [...Array(num).keys()].map((v) => v + 1);
    const sum = numberList.reduce((acc, cur) => acc += cur , 0);
    const diff = (total - sum) / num;
    
    const answer = numberList.map((number) => number + diff);
    return answer;
}