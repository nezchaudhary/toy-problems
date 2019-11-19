/*
Sorting & Searching

CTCI: 10.2 Group Anagrams

Write a method to sort an array of strings so that all anagrams are next to each other

*/

// Modification of bucket sort
const groupAnagrams = arr => {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const sorted = arr[i].split('').sort().join('');
    if (map.get(sorted)) {
      map.get(sorted).push(arr[i]);
    } else {
      map.set(sorted, [arr[i]]);
    }
  }

  let result = [];
  for (let [key, value] of map) {
    result = [...result, ...value];
  }
  return result;
}

console.log(groupAnagrams(['abc', 'bcds', 'cba', 'bca', 'sdcb', 'dcsb', 'ab', 'ba']));