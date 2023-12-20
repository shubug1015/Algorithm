function solution(num_list) {
    const answer = num_list.reduce((acc, cur) => {        
        if(cur % 2 === 0)
            acc[0]++;
        else
            acc[1]++;
        return acc;
    }, [0, 0]);
    
    return answer;
}