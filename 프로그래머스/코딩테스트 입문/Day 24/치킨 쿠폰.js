function solution(chicken) {    
    let chickenRest = chicken;
    let chickenService = 0;
    while (true) {
        if (Math.floor(chickenRest / 10) === 0) {
            break;
        }
        chickenService += Math.floor(chickenRest / 10);
        chickenRest = Math.floor(chickenRest / 10) + (chickenRest % 10);
    }
    return chickenService;
}