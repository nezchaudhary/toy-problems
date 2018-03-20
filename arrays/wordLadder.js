const checkWordChange = (word1, word2) => {
  let count = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) count++;
  }
  return count === 1;
}


const wordLadder = (start, end, dictionary, result = []) => {
  if (dictionary.length === 0) return [];
  if (start === end) {
    result.push(end);
    return;
  }
  result.push(start);
  let word;
  for (let i = 0; i < dictionary.length; i++) {
    if (checkWordChange(start, dictionary[i])) {
      word = dictionary[i];
      dictionary.splice(i, 1);
      break;
    }
  }

  wordLadder(word, end, dictionary, result);
  return result;


}

console.log(wordLadder('TOON', 'PLEA', ['POON', 'PLEE', 'SAME', 'POIE', 'PLEA', 'PLIE', 'POIN']));
