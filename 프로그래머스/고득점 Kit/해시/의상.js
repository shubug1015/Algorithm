function solution(clothes) {
    const map = new Map();    
    for (const [clothName, clothType] of clothes) {        
        map.set(clothType, (map.get(clothType) || 0) + 1);
    }
    
    let answer = 1;
    for (const [_, value] of map) {
        answer *= (value + 1);
    }

    return answer - 1;
}