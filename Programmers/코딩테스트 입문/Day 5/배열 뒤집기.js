function solution(num_list) {
    const answer = num_list.reduce((acc, cur, index, arr) => {
        return [...acc, arr[arr.length - (index + 1)]];
    }, [])
    return answer;
}