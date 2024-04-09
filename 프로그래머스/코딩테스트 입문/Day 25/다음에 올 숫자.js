function solution(common) {
    let answer;
    if ((common[1] - common[0]) === (common[common.length - 1] - common[common.length - 2])) {
        answer = (common[common.length - 1] * 2) - common[common.length - 2];
    }
    if ((common[1] / common[0]) === (common[common.length - 1] / common[common.length - 2])) {
        answer = common[common.length - 1] * (common[common.length - 1] / common[common.length - 2]);
    }
    return answer;
}