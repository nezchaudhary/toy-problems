/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits, word = '', result = []) {
  const combinations = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  };
  let alphabets = combinations[digits[0]];
  for (let j = 0; j < alphabets.length; j++) {
    word += alphabets[j];
    if (digits.length > 1) {
      letterCombinations(digits.slice(1), word, result);  
    } else if (digits.length === 1) {
      result.push(word);
    }
    word = word.slice(0, word.length - 1);
  }  
  return result;

};

console.log(letterCombinations('22'));