function solution(spell, dic) {
    let answer = 2;
    for (const i of dic) {
        for (const j of spell) {
            if (i.includes(j)) {                
                answer = 1;
            }
            if (!i.includes(j)) {
                answer = 2;
                break;                
            }
        }
        
        if (answer === 1) {
            break;
        }
    }
    return answer;
}