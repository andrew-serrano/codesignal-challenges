function comeOnDown(maxPrice, bids) {
  let bidsFiltered,
    minBids = [1],
    finalGuess = 0,
    finalChance = 0;

  //Max
  bids.push(maxPrice);

  // Remove bids that exceed maxPrice
  bidsFiltered = bids.filter(item => {
    return item <= maxPrice
  });

  // Sort highest from lowest
  bidsFiltered.sort((a, b) => {
    return b - a;
  });

  minBids.push(bidsFiltered[bidsFiltered.length - 1]);

  // Sort highest from lowest
  minBids.sort((a, b) => {
    return b - a;
  });

  /* 
  Determine guess and chance
  Determine the range from each bid
  */
  bidsFiltered.forEach((element, i) => {
    let nextPos = i + 1;

    // Avoid overflow
    if (nextPos === bidsFiltered.length) return;

    let nextElement = bidsFiltered[nextPos],
      chance = (element - nextElement) - 1,
      guess = element - chance;

    /* 
    Assign the guess based on the chance
    */
    if (chance > finalChance) {
      finalChance = chance;
      finalGuess = guess;
    }

    if (chance === finalChance) {
      finalGuess = guess
    }
  });


  /* 
  Determine guess and chance
  Determine the range from each bid
  */
  minBids.forEach((element, i) => {
    let nextPos = i + 1;

    // Avoid overflow
    if (nextPos === minBids.length) return;

    let nextElement = minBids[nextPos],
      chance = (element - nextElement),
      guess = element - chance;

    /* 
    Assign the guess based on the chance
    */
    if (chance > finalChance) {
      finalChance = chance;
      finalGuess = guess;
    }

    if (chance === finalChance) {
      finalGuess = guess
    }
  });

  return finalGuess;
}