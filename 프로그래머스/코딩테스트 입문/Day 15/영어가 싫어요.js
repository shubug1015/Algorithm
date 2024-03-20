function solution(numbers) {    
    const stringList = [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
    ]

    let answer = numbers;
    for (const string of stringList) {
        if (numbers.indexOf(string) !== -1) {            
            answer = answer.replaceAll(string, String(stringList.indexOf(string)));
        }
    }
    
    return Number(answer);
}