function solution(nums) {
    let answer = 0;
    const obj = new Set();
    
    nums.forEach(item => obj.add(item));
    answer = obj.size > nums.length / 2 ? nums.length / 2 : obj.size;
    return answer;
}
