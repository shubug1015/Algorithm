function solution(price) {
    if(price >= 500000)
        return Math.floor(price * 0.80);
    if(price >= 300000)
        return Math.floor(price * 0.90);
    if(price >= 100000)
        return Math.floor(price * 0.95);
    return price
}