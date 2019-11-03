const CONSONANTS = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','x','z', 'w'];

function takingAttendance(classList) {
  let total = 0;

  classList.map(word => {
    let consonantsGroupedArray = [],
      previousIndex = -1;

    total += 5;

    [...word].forEach((letter, index) => {
      let letterLowered = letter.toLowerCase();

      if (CONSONANTS.indexOf(letterLowered) === -1) return;

      if (previousIndex + 1 === index && consonantsGroupedArray.length > 0) {
        consonantsGroupedArray[consonantsGroupedArray.length - 1] += letterLowered;
      } else {
        consonantsGroupedArray.push(letterLowered)
      }

      previousIndex = index;
    });

    return consonantsGroupedArray;
  }).forEach(item => {
    item.forEach(x => {
      total += 1 << (x.length - 1);
    });
  });
  return total;
};