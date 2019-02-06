const minimumContinuousSubsequence = (targetList, tagsList) => {
  // store target list words in an object with a value of an array
  // iterate over tagslist and if found is found, push it to array at target word in object
  // iterate over targetlist backwards to find answer

  let targetWordIndices = {};
  for (let word of targetList) {
    targetWordIndices[word] = [];
  }

  for (let i = 0; i < tagslist.length; i++) {
    if (targetWordIndices[tagslist[i]]) {
      targetWordIndices[tagslist[i]].push(i);
    }
  };

  let result = [];

  for (let i = targetList.length - 1; i >= 0; i--) {
    let currentWordIndices = targetWordIndices[targetList[i]]
    if (currentWordIndices.length === 0) {
      return [0];
    }
    if (i === targetList.length - 1) {
      result[1] = currentWordIndices[currentWordIndices.length - 1];
    }
    
    if (i === 0) {
      if (currentWordIndices)
    }



    resul
  }
}