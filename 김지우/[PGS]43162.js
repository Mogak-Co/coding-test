function solution(maps) {
  let my = maps.length - 1,
    mx = maps[0].length - 1,
    queue = [[0, 0]],
    ans = 0;

  let visited = Array.from(Array(maps.length), () => Array(maps[0].length).fill(false));

  while (queue.length) {
    ans++;
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let cur = queue.shift(),
        curY = cur[0],
        curX = cur[1];

      if (visited[curY][curX]) continue;
      maps[curY][curX] = 0;
      visited[curY][curX] = true;

      if (curY < my && maps[curY + 1][curX] == 1) queue.push([curY + 1, curX]);
      if (curX < mx && maps[curY][curX + 1] == 1) queue.push([curY, curX + 1]);
      if (curY > 0 && maps[curY - 1][curX] == 1) queue.push([curY - 1, curX]);
      if (curX > 0 && maps[curY][curX - 1] == 1) queue.push([curY, curX - 1]);

      if (curY === my && curX === mx) return ans;
    }
  }
  return -1;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
// while (que.length) 미리 ans++, for (size) 까지
// cur = queue.shift(), curY = cur[0], curX =  cur[1]
// 만약 이미 방문한 곳은 건너뛰기, maps엔 되돌아가기 방지용으로 0을, visited 에는 true로 체크
// curX, curY 와 maps[curY][curX] 을 보고 갈 수 있으면 queue.push(갈수있는곳)
// 미리 ans++ 했으므로 m, n 에 도달하면 리턴. 즉 도착 1개 전에서 끝내기.
