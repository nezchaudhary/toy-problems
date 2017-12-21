
const sortWord = (word) => {
  return word.split('').sort().join('').toLowerCase();
}

const shortestCompletingWord = (words, licensePlate) => {
  
  let letters = new Array(26).fill(0);
  let count = 0;
  for (let char of licensePlate) {
    let code = char.toLowerCase().charCodeAt(0);
    if (65 <= code && code <= 122) {
      letters[code - 97]++;
      count++;
    }
  }

  let result = '';
  let resultLength = Number.POSITIVE_INFINITY;
  let copy;
  let tempCount;

  for (let word of words) {
    if (word.length < resultLength) {
      copy = letters.slice();
      tempCount = count;
      for (let char of word) {
        let code = char.toLowerCase().charCodeAt(0);
        if (copy[code - 97] > 0) {
          tempCount--;
          copy[code - 97]--;
        }
        
        if (tempCount === 0) {
          result = word;
          resultLength = word.length;
        }
      }
    }
  }
  return result || null;
}

console.log(shortestCompletingWord(['step', 'steps', 'stripe', 'stepple'], '1s3 PSt')); // 'steps'
console.log(shortestCompletingWord(['looks', 'pest', 'stew', 'show'], '1s3 456')); // 'pest'
