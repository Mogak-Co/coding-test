function solution(begin, target, words) {
    const visited = { [begin]: 0 }
    const queue = [begin]

    while (queue.length) {
        let cur = queue.shift()
        if (cur === target) break

        for (let word of words) {
            if (isConnected(cur, word) && !visited[word]) {
                queue.push(word)
                visited[word] = visited[cur] + 1
            }
        }
    }
    return visited[target] ? visited[target] : 0
}

const isConnected = (str1, str2) => {
    let cnt = 0
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) cnt++
    }
    return cnt === 1 ? true : false
}
// while que.length, cur = queue.shift()
// queue 안의 cur 와 target이 같으면 break
// 연결되어 있고 아직 방문 안했으면 queue 에 추가
// visited[word] 에 visited[cur] 보다 1 증가시킨다
// visited[target] 이 있으면 return 하고 없으면 0
