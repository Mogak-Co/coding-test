function solution(survey, choices) {
  let personalType = "";
  const types = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  for (let i = 0; i < survey.length; i++) {
    const arr = survey[i].split("");

    if (choices[i] < 4) types[arr[0]] += 4 - choices[i];
    else types[arr[1]] += choices[i] - 4;
  }
  personalType += types["T"] > types["R"] ? "T" : "R";
  personalType += types["F"] > types["C"] ? "F" : "C";
  personalType += types["M"] > types["J"] ? "M" : "J";
  personalType += types["N"] > types["A"] ? "N" : "A";
  return personalType;
}
