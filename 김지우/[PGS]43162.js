function solution(n, computers) {
  let ans = 0
  let visited = Array.from({ length: n }, () => false)

  function dfs(i) {
    visited[i] = true
    for (let j = 0; j < n; j++) {
      if (computers[i][j] === 1 && !visited[j]) {
        dfs(j)
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i)
      ans++
    }
  }
  return ans
}
