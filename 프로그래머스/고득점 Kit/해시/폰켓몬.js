function solution(nums) {
    const max = nums.length / 2;
    const monList = [...new Set(nums)];
    const answer = monList.length <= max ? monList.length : max;
    return answer;
}