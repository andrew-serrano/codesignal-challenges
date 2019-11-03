/* 
Sort the documents from highest size to lowest E.G 10,5,2 on every iteration
return N threads for first queue. Complete the job by returning the results
and elapsed time. After job return members that are not 0. Get next upcoming 
members and concat with the finished queue. Then recursively call the function 
until we have nothing left to work with and return the elapsed job time.
*/
function concurrentBackups(threads, documents, elapsedTime = 0) {
  if (documents.length === 0) return elapsedTime;

  let documentsSorted = documents.sort((a, b) => b - a),
    queue = documentsSorted.slice(0, threads),
    finishedQueue = nextQueue = null;

  // Append elapsed time
  elapsedTime += queue[queue.length - 1];

  // Run job
  finishedQueue = queue.map((item, i, arr) => item - arr[arr.length - 1]);

  // Return items that are greater then 0
  finishedQueue = finishedQueue.filter(item => item > 0);

  // Create the next queue and execute
  nextQueue = new Array().concat(documents.slice(threads), finishedQueue);

  return concurrentBackups(threads, nextQueue, elapsedTime);
}
