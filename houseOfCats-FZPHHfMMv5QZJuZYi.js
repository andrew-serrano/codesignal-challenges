const human_legs = 2;
const cat_legs = 4;
const total_legs = human_legs + cat_legs;
let legsArray = [total_legs, human_legs, cat_legs];

function houseOfCats(legs) {
  let result = [];

  result = legsArray.map(leg => {
    if (leg > legs) return null;
    let currentLegs = legs;
    let numOfPeople = 0;
    while ((currentLegs = currentLegs - leg) >= 0) {
      numOfPeople++;
    }
    return numOfPeople;
  });

  // result.sort();
  return result;
}

console.log(
  houseOfCats(6),
  houseOfCats(2),
  houseOfCats(8)
)