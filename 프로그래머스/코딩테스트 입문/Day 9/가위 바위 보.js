function solution(rsp) {
    const win = {
        '0': '5',
        '2': '0',
        '5': '2'
    };
    const answer = [...rsp].map(v => win[v]).join('');
    
    return answer;
}