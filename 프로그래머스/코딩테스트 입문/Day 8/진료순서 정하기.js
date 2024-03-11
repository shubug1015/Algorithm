function solution(emergency) {
    const emergency_sorted = emergency.slice().sort((a, b) => b - a);
    const answer =  emergency.map(v => emergency_sorted.indexOf(v) + 1);
    
    return answer;
}