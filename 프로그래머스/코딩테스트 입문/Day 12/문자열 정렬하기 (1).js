function solution(my_string) {
    const answer = [...my_string].reduce((acc, cur) => {
        if (!isNaN(Number(cur)))
            return [...acc, Number(cur)];
        else            
            return acc;
    }, []).sort((a, b) => a - b);
    return answer;
}