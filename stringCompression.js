const stringCompression = (word) => {
  // this version creates the string and checks length;
  // we can first check the length of the final value, if smaller, create string
  let result = word[0];
  let count = 1;
  for (let i = 1; i < word.length; i++) {
    if (!(result[result.length - 1] === word[i])) {
      result += count;
      result += word[i];
      count = 1;
    } else {
      count++;
    }
  }
  result += count;
  return word.length > result.length ? result : word;
}

console.log(stringCompression('aabcccccaaa'));
console.log(stringCompression('aabc'));