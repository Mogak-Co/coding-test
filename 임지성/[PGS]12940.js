function solution(n, m) {
    const answer = [];
    let max = n > m ? n : m;
    let min = n > m ? m : n;

    while (min) {
        if (n % min === 0 && m % min === 0) {
            answer.push(min);
            break;
        }
        min--;
    }
    while (max) {
        if (max % n === 0 && max % m === 0) {
            console.log(max);
            answer.push(max);
            break;
        }
        max++;
    }
    return answer;
}
