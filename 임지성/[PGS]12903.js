function solution(s) {
    const len = s.length;
    let s_index = 0;
    let e_index = 0; 

    if (len % 2 === 0) {
        s_index = (len / 2) - 1;
        e_index = (len / 2) + 1;
    } else {
        s_index = ~~(len / 2);
        e_index = ~~(len / 2) + 1;
    }
    return s.slice(s_index, e_index);
}
