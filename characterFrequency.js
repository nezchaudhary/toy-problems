/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function (string) {
  //i: a string of characters;
  //o: nested arrays sorted first by frequency & then by alphabets
  //c: none
  //e: empty string?
  let characterCount = {};
  for (let char of string) {
    char = char.toLowerCase();
    characterCount[char] ? characterCount[char]++ : characterCount[char] = 1;
  }

  let allCount = [];
  for (let char in characterCount) {
    allCount.push([char, characterCount[char]]);
  }
  console.log('allcount before sorting', allCount);
  allCount = allCount.sort((a, b) => b[1] - a[1]);
  console.log('allcount after sorting 1', allCount);
  
  return allCount.sort((a, b) => a[0] > b[0] && a[1] <= b[1]);
};

console.log(characterFrequency('mississippi')); // [ ['i', 4], ['s', 4], ['p', 2], ['m', 1] ]
console.log(characterFrequency('mmmaaaiiibbb'));//[ ['a', 3], ['b', 3], ['i', 3], ['m', 3] ]
console.log(characterFrequency('miaaiaaippi')); // [['a', 4], ['i', 4], ['p', 2], ['m', 1] ]
console.log(characterFrequency('NNeeennhaaaa')); // [['a', 4], , ['n', 4]['e', 3], ['h', 1] ] // ignore case


// //i: string
// //o: array of tuples with count and character
// //c: order should be sorted by frequency in descending and ascending character
// //e: empty string, ignore case?
// //iterate over array and store count in an object
// // keep track of max count
// //go over object
// let maxCount = 0;
// let characters = {};
// for (let char of string) {
//   char = char.toLowerCase();
//   characters[char] ? characters[char]++ : characters[char] = 1;
//   if (characters[char] > maxCount) {
//     maxCount = characters[char];
//   }
// }

// let counts = {};
// for (let char in characters) {
//   counts[characters[char]] ? counts[characters[char]].push(char) : counts[characters[char]] = [char];
// }

// // let sortedCounts = Object.keys(counts).sort((a, b) => b - a);

// return sortedCounts.reduce((result, count) => {
//   counts[count].sort();
//   counts[count].forEach(value => result.push([value, count]));
//   return result;
// }, []);