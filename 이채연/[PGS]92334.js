function solution(id_list, report, k) {
  const report_once = new Set(report);
  let user_report = Array.from(report_once).map((v) => v.split(' '));
  const report_times = user_report.reduce((acc, cur) => {
    cur[1] in acc ? (acc[cur[1]] += 1) : (acc[cur[1]] = 1);
    return acc;
  }, {});

  const final_report = Object.entries(report_times)
    .filter((v) => v[1] >= k)
    .map((v) => v[0]);

  const id_Obj = id_list.reduce((acc, cur) => ({ ...acc, [cur]: 0 }), {});
  for (user_reportID of user_report) {
    if (final_report.includes(user_reportID[1])) {
      id_Obj[user_reportID[0]] += 1;
    }
  }
  return Object.values(id_Obj);
}
