/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
  //pointer at start of larger string
  //end is next value
  //hash table of string for constant look up
  // if pointer value 
  let indices = [];
  let tHashTable = t.split('').reduce((result, value) => {
    result[value] = true;
    return result;
  }, {});

  // for (let i = 0; i < s.length; i++) {
  //   if (tHashTable[s[i]]) {
  //     indices.push(i);
  //   }
  // };

  // console.log(indices);
  let minLength = t.length;
  let windowStart = 0;
  let windowEnd = 0 + t.length - 1;
  let difference = Number.POSITIVE_INFINITY;
  let startIndex;
  let endIndex;
  // while (windowEnd < indices.length) {
  //   if (indices[windowEnd] - indices[windowStart] < difference) {
  //     difference = indices[windowEnd] - indices[windowStart];
  //     startIndex = indices[windowStart];
  //     endIndex = indices[windowEnd + 1;
  //   }
  //   windowStart++;
  //   windowEnd++;
  // }

  while (windowEnd < s.length) {
    if (tHashTable[s[windowEnd]] === false) {
      tHashTable[s[windowEnd]] = true;
      count++;
      windowEnd++;
    } else if (count === 0) {
      windowStart++;
    } else if (tHashTable[s[windowEnd]] === undefined || tHashTable[s[windowEnd]]) {
      windowEnd++;
    }

    if (count === 3) {
      let temp = s.slice(windowStart, windowEnd);
      if (minString === null) {
        minString = temp;
      } else {
        minString = minString.length > temp.length ? temp : minString;
      }
      tHashTable[s[windowStart]] = false;
      count--;
      windowStart++;
    }
  }
  return s.slice(startIndex, endIndex);
};

console.log(minWindow('ADOBECODEBANC', 'ABC'));
console.log(minWindow('aa', 'a'));
console.log(minWindow('ab', 'a'));
console.log(minWindow('bba', 'ab'));
