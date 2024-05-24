function solution(brown, yellow) {
    let carpet = [];
    
    for (let i = 1; i <= Math.ceil(Math.sqrt(yellow)); i++) {
        if (yellow % i === 0) {
            if ((i * 2 + yellow / i * 2 + 4) === brown) {
                carpet = [i + 2, yellow / i + 2];
                break;
            }            
        }
    }

    return carpet.sort((a, b) => b - a);
}