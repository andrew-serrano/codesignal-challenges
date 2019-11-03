function backupTimeEstimator(startTimes, backupDuration, maxThreads) {
  let increment = 1,
    startingTime = startTimes[0],
    progress = 0,
    index = 0,
    results = [],
    jobArray = [],
    progessArray = Array(startTimes.length).fill(0);

  while (index <= 1) {
    let next = undefined;

    next = startTimes.find(time => time === startingTime)

    if (next !== undefined && jobArray.length < maxThreads) {
      jobArray.push(next);
    }

    startingTime++

    if (index >= maxThreads) {
      index = 0;
    }

    progress = increment / (increment * jobArray.length) / backupDuration[index];
    progessArray[index] += progress;

    progress

    if (progress >= 1) {
      jobArray.splice(index, 1);
    }

    startingTime
    jobArray
    progessArray
    index++;
  }

  // Iteration
  // startingTime++
  // progress = increment / (increment * 1) / backupDuration[0];
  // progessArray[0] += progress;

  // startingTime++
  // progress = increment / (increment * 2) / backupDuration[0];
  // progessArray[0] += progress;
}

backupTimeEstimator(
  [461620201, 461620202, 461620203], [2, 2, 2],
  2
)