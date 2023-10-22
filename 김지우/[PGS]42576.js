function solution(participant, completion) {
  participant.sort()
  completion.sort()
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) return participant[i]
  }
} // 어차피 한명만 완주하지 못했기 때문에 이렇게 풀 수 있다.

function solution(participant, completion) {
  let map = new Map()
  for (let i = 0; i < participant.length; i++) {
    let p = participant[i],
      c = completion[i]

    map.set(p, (map.get(p) || 0) + 1)
    map.set(c, (map.get(c) || 0) - 1)
  }
  for (let [k, v] of map) {
    if (v > 0) return k
  }
}
