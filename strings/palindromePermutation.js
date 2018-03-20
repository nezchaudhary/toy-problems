const palindromePermutation = (word) => {
  // TODO
  // assumption is case insensitive && space counts
  // ignore punctuation

  let letters = {};
  for (let char of word) {
    char = char.toLowerCase();
    letters[char] ? letters[char]++ : letters[char] = 1;
  }
  let isTrue = true;
  if (word.length % 2 === 0) {
    // console.log('here');
    for (let char of word) {
      isTrue = letters[char] % 2 === 0 ? true : false;
    }
    if (!isTrue) {
      return false;
    }
  } else {
    let odd = 0;
    for (let char of word) {
      odd = letters[char] & 2 !== 0 ? odd += 1 : odd;
      if (odd > 1) {
        return false;
      }
    }
  }
  return true;
}

console.log(palindromePermutation('Tact Coa'));
console.log(palindromePermutation('neha'));