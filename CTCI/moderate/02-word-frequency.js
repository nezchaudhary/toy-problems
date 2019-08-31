/*

Word Frequencies: Design a method to find the frequency of occurences of any given word in a book. What if we were running this algorithm multiple times

*/

const wordFrequency = (book, word) => {
  const searchWord = word.trim().toLowerCase(); // this is to handle edge cases where the word need to be case insensitive 
  let count = 0;
  for (let i = 0; i < book.length; i++) {
    if (book[i] === searchWord) count++;
  }
  return count;
}

// If we are going to do this frequently, its based to preprocess the book and use some memory to optimize for time
// Use a hash table to store frequency of words

const preProcessedDictionary = book => {
  const bookMap = {};
  for (let i = 0; i < book.length; i++) {
    let word = book[i].trim().toLowerCase();
    if (word) {
      bookMap[word] ? bookMap[word]++ : bookMap[word] = 1;
    }
  }
  return bookMap;
}

const wordFrequencyPreProcessed = (dictionary, word) => {
  if (!word || ! dictionary) return 0;
  const searchWord = word.trim().toLowerCase();
  return dictionary[searchWord] || 0;
}

