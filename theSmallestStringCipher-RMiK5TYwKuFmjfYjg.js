/* 
To encrypt the mesage using the key we want to compare 
the key to the message and see if the character is less than
to the one we are comparing. If so we add it to our output and continue
until there is nothing left to compare.
"An encrypted message is the lexicographically smallest string made from the combined characters of key and message, preserving their relative order within the original strings."

anytime we are comparing "A" = "A" it needs to switch

if ("g" < "h") {
  true
} else {
  false
}

gdhellmoz
*/

// less[pointerA] < more[pointerB]
// g
// less[pointerA] < more[pointerB]
// d
// less[pointerA] < more[pointerB]
// h
// more[pointerB] < less[pointerA]
// e
// more[pointerB] < less[pointerA]
// l
// more[pointerB] < less[pointerA]
// l
// more[pointerA] < less[pointerB]
// m
// more[pointerB] < less[pointerA]
// o
// less[pointerA] < undefined
// z
let result = '';
let fpoint = 0;
let spoint = 0;

function theSmallestStringCipher(key, message, a, b, fp, sp) {
  if (result.length === (key.length + message.length)) return result;
  let first, second;

  if (a === undefined && b === undefined) {
    if (key.length < message.length) {
      first = Array.from(key);
      second = Array.from(message);
    } else {
      second = Array.from(key);
      first = Array.from(message);
    }
  } else {
    first = a;
    second = b;
    fpoint = fp;
    spoint = sp;
  }

  if (first[fpoint] === second[spoint]) {
    let firstCopy = first.slice();
    let secondCopy = second.slice();
    let fpointCopy = fpoint.valueOf();
    let spointCopy = spoint.valueOf();
    console.log('switch')
    first = secondCopy;
    second = firstCopy;
    fpoint = spointCopy;
    spoint = fpointCopy;

    result += first[fpoint];
    fpoint++;
  } else if (first[fpoint] < second[spoint] || second[spoint] === undefined) {
    result += first[fpoint];
    fpoint++;
  } else {
    console.log('switch')
    let firstCopy = first.slice();
    let secondCopy = second.slice();
    let fpointCopy = fpoint.valueOf();
    let spointCopy = spoint.valueOf();

    first = secondCopy;
    second = firstCopy;
    fpoint = spointCopy;
    spoint = fpointCopy;
  }
  console.log(result)
  return theSmallestStringCipher(key, message, first, second, fpoint, spoint);
}

theSmallestStringCipher("cbede", "cbede");