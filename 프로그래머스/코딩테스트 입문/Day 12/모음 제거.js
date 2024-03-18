function solution(my_string) {
    const answer = ['a', 'e', 'i', 'o', 'u'].reduce((acc, cur) => {
        acc = acc.replaceAll(cur, '');
        return acc;
    }, my_string);
    return answer;
}