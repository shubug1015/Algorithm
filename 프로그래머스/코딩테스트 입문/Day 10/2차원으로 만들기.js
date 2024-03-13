function solution(num_list, n) {
    // // 풀이 1
    // const answer = [...Array(num_list.length / n).keys()].map(
    //     x => [...Array(n).keys()].map(y => num_list[y + (x * n)])
    // );
    
    // 풀이 2
    const answer = Array(num_list.length / n).fill([]).map(() => num_list.splice(0, n));
    
    return answer;
}