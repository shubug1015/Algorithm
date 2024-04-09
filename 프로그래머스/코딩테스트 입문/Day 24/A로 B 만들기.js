function solution(before, after) {
    const beforeArray = [...before].sort();
    const afterArray = [...after].sort();
    
    const answer = beforeArray.join('') === afterArray.join('') ? 1 : 0;
    return answer;
}