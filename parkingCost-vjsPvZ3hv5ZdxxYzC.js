/**
 * Either round up to the nearest 10 or return
 * the number if it is a multiple of 10
 * @param {Number} x 
 * @return {Number}
 */
function round10(x) {
  let precision = 10;
  let toValue = x + precision;
  if (x % precision === 0) return x;
  return (toValue) - ((toValue) % precision)
}

function parkingCost(timeIn, timeOut) {
  let timeInTimestamp = new Date(`01 Jan 1970 ${timeIn}:00`).getTime();
  let timeOutTimestamp = new Date(`01 Jan 1970 ${timeOut}:00`).getTime();
  let timeElapsed = timeOutTimestamp - timeInTimestamp;
  let oneMinuteInMs = 60000;
  let thirtyMinutesInMs = oneMinuteInMs * 30;
  let result = 0;

  // Time <= 30 minutes
  if (timeElapsed <= thirtyMinutesInMs) return result;

  for (let i = 10; i <= round10((timeElapsed - thirtyMinutesInMs) / oneMinuteInMs); i+= 10) {    
    if (i <= 90) {
      result += 1;
    } else {
      result += 2;
    }
  }
  
  return result;
}