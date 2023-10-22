function solution(numbers, target) {
    let ans = 0

    function dfs(level, sum) {
        if (level < numbers.length) {
            dfs(level + 1, sum + numbers[level])
            dfs(level + 1, sum - numbers[level])
        } else {
            if (sum === target) ans++
        }
    }
    dfs(0, 0)
    return ans
}
