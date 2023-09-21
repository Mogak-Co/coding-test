function bfs(y, x) {
  const queue = [[y, x]];
  const dy = [0, 0, 1, -1];
  const dx = [1, -1, 0, 0];
  while (queue.length) {
    ans++;
    const size = queue.length;
    // 현재 큐의 크기를 저장하여 한 레벨의 원소만 처리
    for (let i = 0; i < size; i++) {
      let [Y, X] = queue.shift();
      if (visited[Y][X]) continue;
      map[Y][X] = 0;
      visited[Y][X] = true;

      for (let i = 0; i < 4; i++) {
        let newY = Y + dy[i];
        let newX = X + dx[i];
        if (newY >= 0 && newX >= 0 && newY < N && newX < M && map[newY][newX]) {
          queue.push([newY, newX]);
        }
        if (newY === N - 1 && newX === M - 1) return ans++;
      }
    }
  }
}

bfs(0, 0);
console.log(ans);