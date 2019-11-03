function closestCommonParent(files, parents, file1, file2) {
  let output = null,
    compareArrays = [],
    inputs = [file1, file2];

  /* 
  Iterate over inputs and find the common parent
  */
  for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i],
      directParent = null,
      fileArray = [input];

    while (directParent !== "-1") {
      // Compare
      if (compareArrays.length > 0) {
        for (let j = 0; j < compareArrays[0].length; j++) {
          if (compareArrays[0][j] === input) {
            output = input;
            break;
          }
        }
      }

      // Exit if we have found a common parent
      if (output !== null) break;

      // Else continue up tree
      directParent = parents[files.indexOf(input)];
      fileArray.push(directParent);
      input = directParent;
    }

    if (output !== null) break;
    compareArrays.push(fileArray);
  }

  return output;
}