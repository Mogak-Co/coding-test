function solution(tickets) {
    const graph = {}
    tickets.forEach((ticket) => {
        const [from, to] = ticket
        if (!graph[from]) {
            graph[from] = []
        }
        graph[from].push(to)
    })

    for (const city in graph) {
        graph[city].sort() // 각 출발지에서 도착지를 알파벳 순서대로 정렬
    }
    const answer = []
    const dfs = (cur) => {
        const to = graph[cur]

        while (to && to.length) {
            const next = to.shift() // 다음 도시 선택
            dfs(next) // 다음 도시로 이동
        }
        answer.unshift(cur) // 경로를 앞쪽에 추가
    }

    dfs('ICN')
    return answer
}
