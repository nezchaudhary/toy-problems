const oneWay = (str1, str2) => {
  if (str1 === str2) {
    return true;
  }

  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }

  let change = 0;
  if (str1.length === str2.length) {
    for (let char = 0; char < str1.length; char++) {
      if (str1[char] !== str2[char]) {
        change++;
      }
      if (change > 1) {
        return false;
      }
    }
  } else {
    let largerValue = str1.length > str2.length ? str1 : str2;
    let smallerValue = str1.length < str2.length ? str1 : str2;
    let char1 = 0;
    let char2 = 0;
    for (char1; char1 < largerValue.length; char1++) {
      if (largerValue[char1] !== smallerValue[char2]) {
        char2--;
        change++;
      }
      if (change > 1) {
        return false;
      }
      char2++;
    }
  }
  return true;
}

console.log(oneWay('pale', 'ple')); // true
console.log(oneWay('pales', 'pale')); // true
console.log(oneWay('pale', 'bale')) // true
console.log(oneWay('pale', 'bake')) // false