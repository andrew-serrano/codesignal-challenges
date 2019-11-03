function deleteDigit(n) {
  let value = [...n + ""];
  let result = "";
  let results = [];

  value.forEach((i,i_i) => {
    value.forEach((j,j_i) => {
      if (i_i === j_i) return;
      result += +j;
    });

    results.push(result);
    result = "";
  });

  return Math.max(...results);
}