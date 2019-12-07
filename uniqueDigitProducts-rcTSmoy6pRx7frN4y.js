function uniqueDigitProducts(a) {
  let results = [];
  let lastItem = -1;

  a.map(item => {
      let recentChar = 1;

      item.toString().split("").forEach(function(char) {
        recentChar *= parseInt(char, 10);
      });

      return recentChar;
    })
    .sort()
    .forEach(item => {
      if (item !== lastItem) {
        results.push(item);
      }

      lastItem = item;
    });

  return results.length;
}