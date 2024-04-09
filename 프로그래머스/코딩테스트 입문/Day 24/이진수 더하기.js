function solution(bin1, bin2) {
    const bin1Number = [...bin1].reverse().reduce((acc, cur, idx) => {
        if (cur === '1') {
            acc += Math.pow(2, idx);
        }
        return acc;
    }, 0);
    const bin2Number = [...bin2].reverse().reduce((acc, cur, idx) => {
        if (cur === '1') {
            acc += Math.pow(2, idx);
        }
        return acc;
    }, 0);
    
    let binNumber = bin1Number + bin2Number;
    let answer = '';
    if (binNumber === 0) {
        answer = '0';
    }
    if (binNumber !== 0) {
        while (true) {        
            answer = String(binNumber % 2) + answer;
            binNumber = Math.floor(binNumber / 2);
        
            if (binNumber === 1) {
                answer = '1' + answer;
                break;
            
            }
        }
    }
    return answer;
}