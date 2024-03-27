eles.forEach((ele, i) => {
  if (ele === '+') ans = new Set([...ans, ...sets[i + 1]]);
  if (ele === '-') ans = new Set(ans.filter((v) => sets[i + 1].has(v)));
});