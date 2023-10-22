function solution(survey, choices) {
    const object = {
        R: 0,
        T: 0,
        C: 0,
        F: 0,
        J: 0,
        M: 0,
        A: 0,
        N: 0,
    }
    let point = []
    for (let choice of choices) {
        point.push(choice - 4)
    }
    for (let i = 0; i < survey.length; i++) {
        if (point[i] < 0) object[survey[i][0]] += Math.abs(point[i])
        else if (point[i] > 0) object[survey[i][1]] += point[i]
    }
    let str = ''

    str = object['T'] > object['R'] ? str + 'T' : str + 'R'
    str = object['F'] > object['C'] ? str + 'F' : str + 'C'
    str = object['M'] > object['J'] ? str + 'M' : str + 'J'
    str = object['N'] > object['A'] ? str + 'N' : str + 'A'

    return str
}
