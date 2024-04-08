function solution(numlist, n) {
    const array = numlist.map((num) => ({
        num,
        diff: Math.abs(num - n)
    }));    
    array.sort((a, b) => a.diff - b.diff || b.num - a.num);

    const answer = array.map(({num}) => num);
    return answer;
}