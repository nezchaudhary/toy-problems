const URLify = (value, trueLength) => {
  let count = 0;
  for (let i = 0; i < trueLength; i++) {
    value[i] === ' ' ? count ++ : null;
  }
  let index = trueLength + (count * 2);
  if (trueLength < value.length) {
    value[trueLength] = '\0';
  }
  let word = value.split('');
  for (let j = trueLength - 1; j >= 0; j--) {
    if (word[j] === ' '){
      word[index - 1] = '0';
      word[index - 2] = '2';
      word[index - 3] = '%';
      index -= 3;
    } else {
      word[index - 1] = word[j];
      index --;
    }
  }
  return word.join('');
}

console.log(URLify('Mr John Smith    ', 13));