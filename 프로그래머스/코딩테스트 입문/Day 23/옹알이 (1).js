function solution(babbling) {
    const answer = babbling.map((v) => {
        return v.replaceAll('aya', '|')
            .replaceAll('ye', '|')
            .replaceAll('woo', '|')
            .replaceAll('ma', '|')
            .replaceAll('|', '');
    }).filter((v) => v === '').length;
    
    return answer;
}