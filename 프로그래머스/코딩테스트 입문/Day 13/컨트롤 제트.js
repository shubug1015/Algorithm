function solution(s) {
    const sArray = s.split(' ');
    const answer = sArray.reduce((acc, cur, idx) => {
        if (cur === 'Z') {            
            acc -= Number(sArray[idx - 1]);
        } else {            
            acc += Number(cur);
        }            
        return acc;
    }, 0);
    
    return answer;
}