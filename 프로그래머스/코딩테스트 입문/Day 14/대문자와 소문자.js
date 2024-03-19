function solution(my_string) {
    const answer = [...my_string].map((string) => {
        if (string === string.toUpperCase())
            return string.toLowerCase();
        else
            return string.toUpperCase();
    }).join('');

    return answer;
}