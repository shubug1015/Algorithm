function solution(num_list) {
    // 문제 풀이 1
    // const answer = num_list.reduce((acc, cur) => {
    //     console.log(acc)
    //     if ((cur % 2) === 0)
    //         return acc = [acc[0] + 1, acc[1]];
    //     else 
    //         return acc = [acc[0], acc[1] + 1];
    // }, [0, 0]);


    // 문제 풀이 2
    // let evenNum = 0
    // let oddNum = 0;
    
    // for (let i = 0; i < num_list.length; i++) {
    //     if (num_list[i] % 2 === 0)
    //         evenNum += 1;
    //     else
    //         oddNum += 1;
    // }
    
    // const answer = [evenNum, oddNum];
    
    let answer = [0, 0];
    
    for (let num of num_list) {
        answer[num % 2] += 1;
    }
    
    return answer;
}