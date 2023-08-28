function solution(n, computers) {
  let ans = 0;
  let arr = computers;
  let visited = new Array(n).fill(false);

  function dfs(i) {
    if (visited[i] === true) return 0;
    else visited[i] = true;

    for (let j in arr[i]) {
      if (arr[i][j] == 1) dfs(j);
    }
    return 1;
  }

  for (let i in arr) {
    ans += dfs(i);
  }
  return ans;
}
